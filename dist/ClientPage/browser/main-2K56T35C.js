import{$ as a5,A as O1,B as q1,C as u,D as W0,E as z0,F as _1,G as u0,H as T1,I as R1,J as j1,K as Y,L as U1,M as W1,N as $1,O as X1,P as x0,Q as G1,R as Y1,S as M0,T as m0,U as J1,V as Q1,W as r0,X as K1,Y as E1,Z as I1,_ as N1,a as d0,aa as l5,b as T,c as A1,d as Z1,e as L1,f as B1,g as F1,h as h0,i as p0,j as k1,k as S,l as y1,m as Z,n as R,o as j,p as f0,q as U0,r as e0,s as d,t as f,u as x,v as S1,w as U,x as b0,y as P1,z as D1}from"./chunk-4KQFRBQ4.js";import"./chunk-FK6H3RFT.js";import"./chunk-DAQOROHW.js";var $0=[{path:"",loadChildren:()=>import("./chunk-4RWBTRDJ.js").then(a=>a.ComponentsModule)}],V0=class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=j({type:a});static \u0275inj=T({imports:[r0.forRoot($0,{scrollPositionRestoration:"top",preloadingStrategy:J1,onSameUrlNavigation:"reload"}),r0]})};var $2=(a,l)=>({"navbar-scrolled":a,"navbar-product-page":l});function X2(a,l){if(a&1){let t=S1();d(0,"a",24),U("click",function(){let h=Z1(t).$implicit,e=b0();return L1(e.ChangePage(h))}),x(1,"i",9),u(2),f()}if(a&2){let t=l.$implicit;S(2),z0(" ",t," ")}}function G2(a,l){if(a&1&&(d(0,"span",25),u(1),f()),a&2){let t=b0();S(),W0(t.cartItemCount)}}function Y2(a,l){if(a&1&&(d(0,"span",25),u(1),f()),a&2){let t=b0();S(),W0(t.WishlistCount)}}var N=class a{constructor(l,t,i,h,e,r){this.location=l;this.element=t;this.router=i;this.route=h;this.platformId=e;this.componentsService=r;this.sidebarVisible=!1,this.flora_detail=this.componentsService.getAllCategory(),this.flora_detail.splice(0,0,"All Flora"),this.flora_detail=Array.from(new Set(this.flora_detail.flatMap(s=>s.split(",").map(o=>o.trim()))))}toggleButton;sidebarVisible;cartItemCount=0;WishlistCount=0;isScrolled=!1;isProductPage=!1;flora_detail=[];enableColorOnScroll=!1;isMobile=!1;ngOnInit(){let l=this.element.nativeElement;this.toggleButton=l.getElementsByClassName("navbar-toggler")[0],this.router.events.pipe(d0(t=>t instanceof x0)).subscribe(()=>{let t=this.route.root;for(;t.firstChild;)t=t.firstChild;this.enableColorOnScroll=t.snapshot.data.colorOnScroll??!1,this.isProductPage=this.router.url.includes("/Product/")}),this.componentsService.wishlist$.subscribe(t=>{this.WishlistCount=t.length||0}),this.componentsService.cartlist$.subscribe(t=>{this.cartItemCount=t.reduce((i,h)=>i+h.productcount,0)}),this.checkScreen(),Y(this.platformId)&&(window.addEventListener("resize",()=>{this.checkScreen()}),window.addEventListener("scroll",()=>{this.isScrolled=window.scrollY>50}))}checkScreen(){Y(this.platformId)&&(this.isMobile=window.innerWidth<=768)}sidebarOpen(){if(!Y(this.platformId))return;let l=this.toggleButton,t=document.getElementsByTagName("html")[0];setTimeout(function(){l.classList.add("toggled")},500),t.classList.add("nav-open"),this.sidebarVisible=!0}sidebarClose(){if(!Y(this.platformId))return;let l=document.getElementsByTagName("html")[0];this.toggleButton.classList.remove("toggled"),this.sidebarVisible=!1,l.classList.remove("nav-open")}sidebarToggle(){this.sidebarVisible===!1?this.sidebarOpen():this.sidebarClose()}ChangePage(l){l==="All Flora"&&(l="all"),this.router.navigate(["/collection/",l])}goToWishlist(){this.sidebarToggle(),this.router.navigate(["/wishlist"])}goToCart(){this.sidebarToggle(),this.router.navigate(["/cart"])}static \u0275fac=function(t){return new(t||a)(Z(u0),Z(h0),Z(M0),Z(G1),Z(p0),Z(K1))};static \u0275cmp=R({type:a,selectors:[["app-navbar"]],standalone:!1,decls:34,vars:8,consts:[[1,"navbar","navbar-expand-lg","fixed-top","navbar-modern",3,"ngClass"],[1,"container"],[1,"navbar-translate"],[1,"navbar-left-group"],["routerLink","/",1,"navbar-brand-wrapper"],["src","img/riyaorangery_nobg.png","alt","Riya Orangery logo \u2013 Indoor plants and succulents",1,"brand-logo"],[1,"navbar-brand"],["ngbDropdown","",1,"d-inline-block","dropdown","flora-dropdown"],["id","dropdownBasic1","ngbDropdownToggle","",1,"flora-link"],[1,"fa","fa-leaf"],["ngbDropdownMenu","","aria-labelledby","dropdownBasic1",1,"dropdown-menu-modern"],["class","dropdown-item",3,"click",4,"ngFor","ngForOf"],["type","button","data-toggle","collapse","data-target","#navbarToggler","aria-controls","navbarTogglerDemo02","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","navbar-burger",3,"click"],[1,"navbar-toggler-bar"],["id","navbarToggler",1,"navbar-collapse"],[1,"navbar-nav","ml-auto"],[1,"nav-item"],["rel","tooltip","title","Cart","data-placement","bottom",1,"nav-link","nav-icon-link",3,"click"],[1,"icon-wrapper"],[1,"fa","fa-shopping-cart"],["class","badge-count",4,"ngIf"],[1,"d-lg-none","nav-label"],["rel","tooltip","title","Wishlist","data-placement","bottom",1,"nav-link","nav-icon-link",3,"click"],[1,"fa","fa-heart"],[1,"dropdown-item",3,"click"],[1,"badge-count"]],template:function(t,i){t&1&&(d(0,"nav",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),x(5,"img",5),d(6,"span",6),u(7,"Riya Orangery"),f()(),d(8,"div",7)(9,"a",8),x(10,"i",9),u(11," Flora "),f(),d(12,"div",10),f0(13,X2,3,1,"a",11),f()()(),d(14,"button",12),U("click",function(){return i.sidebarToggle()}),x(15,"span",13)(16,"span",13)(17,"span",13),f()(),d(18,"div",14)(19,"ul",15)(20,"li",16)(21,"a",17),U("click",function(){return i.goToCart()}),d(22,"div",18),x(23,"i",19),f0(24,G2,2,1,"span",20),f(),d(25,"span",21),u(26,"Cart"),f()()(),d(27,"li",16)(28,"a",22),U("click",function(){return i.goToWishlist()}),d(29,"div",18),x(30,"i",23),f0(31,Y2,2,1,"span",20),f(),d(32,"span",21),u(33,"Wishlist"),f()()()()()()()),t&2&&(e0("ngClass",_1(5,$2,i.isScrolled,i.isProductPage)),U0("color-on-scroll",i.enableColorOnScroll?"500":null),S(13),e0("ngForOf",i.flora_detail),S(11),e0("ngIf",i.cartItemCount!==0),S(7),e0("ngIf",i.WishlistCount!==0))},dependencies:[T1,R1,j1,N1,I1,E1,m0],styles:[".navbar-modern[_ngcontent-%COMP%]{background:transparent;-webkit-backdrop-filter:none;backdrop-filter:none;box-shadow:none;padding:12px 0;transition:all .3s ease}.navbar-modern.navbar-scrolled[_ngcontent-%COMP%]{background:#fffffffa;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:0 6px 25px #0000001f}.navbar-modern.navbar-product-page[_ngcontent-%COMP%]{background:#fffffffa;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:0 4px 20px #00000014}.navbar-left-group[_ngcontent-%COMP%]{display:flex;align-items:center;gap:20px;flex-wrap:nowrap}.navbar-brand-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;cursor:pointer;transition:all .3s ease}.navbar-brand-wrapper[_ngcontent-%COMP%]:hover{transform:translate(3px)}.navbar-brand-wrapper[_ngcontent-%COMP%]:hover   .navbar-brand[_ngcontent-%COMP%]{color:#6aa84f}.navbar-brand-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]{height:45px;width:auto;filter:drop-shadow(0 2px 8px rgba(106,168,79,.2))}.navbar-brand-wrapper[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:700;color:#fff;margin:0;transition:color .3s ease;text-shadow:0 2px 4px rgba(0,0,0,.3)}.navbar-scrolled[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%], .navbar-product-page[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{color:#2d3748!important;text-shadow:none}.flora-dropdown[_ngcontent-%COMP%]{margin-left:0}.flora-dropdown[_ngcontent-%COMP%]   .flora-link[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:10px 20px;background:linear-gradient(135deg,#6aa84f,#5a9440);color:#fff;border-radius:50px;font-weight:600;font-size:.95rem;cursor:pointer;transition:all .3s ease;box-shadow:0 4px 12px #6aa84f4d}.flora-dropdown[_ngcontent-%COMP%]   .flora-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:.9rem}.flora-dropdown[_ngcontent-%COMP%]   .flora-link[_ngcontent-%COMP%]   i.fa-chevron-down[_ngcontent-%COMP%]{font-size:.75rem}.flora-dropdown[_ngcontent-%COMP%]   .flora-link[_ngcontent-%COMP%]:hover{background:linear-gradient(135deg,#5a9440,#4a7d33);box-shadow:0 6px 16px #6aa84f66;transform:translateY(-1px)}.dropdown-menu-modern[_ngcontent-%COMP%]{border:none;border-radius:16px;box-shadow:0 10px 30px #00000026;padding:10px 0;margin-top:10px;background:#fff}.dropdown-menu-modern[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]{padding:12px 24px;font-weight:500;color:#4a5568;display:flex;align-items:center;gap:12px;cursor:pointer;transition:all .2s ease}.dropdown-menu-modern[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#6aa84f;font-size:.85rem}.dropdown-menu-modern[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover{background:linear-gradient(135deg,#f0f9f4,#e8f5e9);color:#2d3748;padding-left:28px}.dropdown-menu-modern[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{color:#5a9440}.dropdown-menu-modern[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:active{background:#e8f5e9}.navbar-toggler[_ngcontent-%COMP%]{border:none;padding:8px;margin-left:auto}.navbar-toggler[_ngcontent-%COMP%]:focus{outline:none;box-shadow:none}.navbar-toggler[_ngcontent-%COMP%]   .navbar-toggler-bar[_ngcontent-%COMP%]{display:block;width:26px;height:3px;background:#6aa84f;border-radius:2px;margin:5px 0;transition:all .3s ease}.navbar-toggler[_ngcontent-%COMP%]:hover   .navbar-toggler-bar[_ngcontent-%COMP%]{background:#5a9440}.navbar-nav[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{margin:0}.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-icon-link[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:10px 16px;color:#4a5568;font-weight:500;cursor:pointer;transition:all .3s ease;border-radius:12px}.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-icon-link[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center}.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-icon-link[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.4rem;color:#6aa84f;transition:all .3s ease}.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-icon-link[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   .badge-count[_ngcontent-%COMP%]{position:absolute;top:-5px;right:-5px;background:linear-gradient(135deg,#fc8181,#f56565);color:#fff;font-size:.7rem;font-weight:700;padding:3px 7px;border-radius:50%;min-width:20px;height:20px;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px #fc818166;animation:_ngcontent-%COMP%_badgePulse 2s ease-in-out infinite}.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-icon-link[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%]{font-weight:600;color:#2d3748}.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-icon-link[_ngcontent-%COMP%]:hover   .icon-wrapper[_ngcontent-%COMP%]{transform:scale(1.1)}.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-icon-link[_ngcontent-%COMP%]:hover   .icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#5a9440}@keyframes _ngcontent-%COMP%_badgePulse{0%,to{transform:scale(1)}50%{transform:scale(1.1)}}@media(max-width:991px){.navbar-translate[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%;justify-content:space-between}.navbar-left-group[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;flex-wrap:nowrap;flex:1}.navbar-brand-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]{height:32px}.navbar-brand-wrapper[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{font-size:1rem}.flora-dropdown[_ngcontent-%COMP%]{margin-left:0}.flora-dropdown[_ngcontent-%COMP%]   .flora-link[_ngcontent-%COMP%]{padding:8px 14px;font-size:.85rem;white-space:nowrap}.navbar-collapse[_ngcontent-%COMP%]{background:#fff;border-radius:16px;margin-top:15px;padding:20px;box-shadow:0 8px 24px #0000001a}.navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]{flex-direction:column;gap:10px;width:100%}.navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{width:100%}.navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-icon-link[_ngcontent-%COMP%]{justify-content:flex-start;width:100%;padding:12px 16px}.navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-icon-link[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.5rem}}@media(max-width:576px){.navbar-left-group[_ngcontent-%COMP%]{gap:8px}.navbar-brand-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]{height:28px}.navbar-brand-wrapper[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{font-size:.9rem}.flora-dropdown[_ngcontent-%COMP%]   .flora-link[_ngcontent-%COMP%]{padding:6px 10px;font-size:.75rem;gap:4px}.flora-dropdown[_ngcontent-%COMP%]   .flora-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:.75rem}}@media(max-width:768px)and (min-width:577px){.navbar-brand-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]{height:30px}.navbar-brand-wrapper[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{font-size:.95rem}.flora-dropdown[_ngcontent-%COMP%]   .flora-link[_ngcontent-%COMP%]{padding:7px 12px;font-size:.8rem}}"]})};var H0=class a{test=new Date;currentYear=new Date().getFullYear();showScrollTop=!1;onWindowScroll(){this.showScrollTop=window.scrollY>300}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=R({type:a,selectors:[["app-footer"]],hostBindings:function(t,i){t&1&&U("scroll",function(){return i.onWindowScroll()},k1)},standalone:!1,decls:70,vars:3,consts:[[1,"footer-modern"],[1,"container"],[1,"footer-content"],[1,"footer-column"],[1,"footer-brand"],["src","img/riyaorangery_nobg.png","alt","Riya Orangery",1,"footer-logo"],[1,"footer-tagline"],[1,"footer-social"],["href","https://www.instagram.com/__riya_orangery_/","target","_blank","rel","noopener","aria-label","Riya Orangery Instagram",1,"social-link"],[1,"fa","fa-instagram"],["href","https://wa.me/917373829090","target","_blank","rel","noopener","aria-label","WhatsApp",1,"social-link"],[1,"fa","fa-whatsapp"],[1,"footer-title"],[1,"footer-links"],["routerLink","/"],[1,"fa","fa-leaf"],["routerLink","/collection/all"],[1,"fa","fa-th"],["routerLink","/cart"],[1,"fa","fa-shopping-cart"],["routerLink","/wishlist"],[1,"fa","fa-heart"],[1,"footer-contact"],[1,"fa","fa-phone"],[1,"fa","fa-map-marker"],[1,"fa","fa-clock-o"],[1,"footer-dream"],[1,"newsletter"],[1,"newsletter-text"],[1,"footer-bottom"],[1,"footer-credit"],["aria-label","Scroll to top",1,"scroll-to-top",3,"click"],[1,"fa","fa-arrow-up"]],template:function(t,i){t&1&&(d(0,"footer",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),x(5,"img",5),d(6,"h4"),u(7,"Riya Orangery"),f()(),d(8,"p",6),u(9," We don't only deliver indoor plants, we deliver peace in small containers. "),f(),d(10,"div",7)(11,"a",8),x(12,"i",9),f(),d(13,"a",10),x(14,"i",11),f()()(),d(15,"div",3)(16,"h5",12),u(17,"Quick Links"),f(),d(18,"ul",13)(19,"li")(20,"a",14),x(21,"i",15),u(22," Home"),f()(),d(23,"li")(24,"a",16),x(25,"i",17),u(26," Shop All"),f()(),d(27,"li")(28,"a",18),x(29,"i",19),u(30," Cart"),f()(),d(31,"li")(32,"a",20),x(33,"i",21),u(34," Wishlist"),f()()()(),d(35,"div",3)(36,"h5",12),u(37,"Contact Us"),f(),d(38,"ul",22)(39,"li"),x(40,"i",23),d(41,"span"),u(42,"7373829090"),f()(),d(43,"li"),x(44,"i",24),d(45,"span"),u(46,"Chinnamanur-625515,"),x(47,"br"),u(48,"Tamil Nadu, India"),f()(),d(49,"li"),x(50,"i",25),d(51,"span"),u(52,"Mon - Sat: 9AM - 6PM"),f()()()(),d(53,"div",3)(54,"h5",12),u(55,"Let's Create"),f(),d(56,"p",26),u(57,"The garden of your dreams"),f(),d(58,"div",27)(59,"p",28),u(60,"Stay updated with our latest plants and offers"),f()()()(),d(61,"div",29)(62,"p"),u(63),f(),d(64,"p",30),u(65,"Made with "),x(66,"i",21),u(67," for plant lovers"),f()()(),d(68,"button",31),U("click",function(){return i.scrollToTop()}),x(69,"i",32),f()()),t&2&&(S(63),z0("\xA9 ",i.currentYear," Riya Orangery. All rights reserved."),S(5),q1("visible",i.showScrollTop))},dependencies:[m0],styles:['.footer-modern[_ngcontent-%COMP%]{background:linear-gradient(135deg,#2d3748,#1a202c);color:#fff;padding:60px 0 20px;margin-top:80px;position:relative}.footer-modern[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#6aa84f,#5a9440,#6aa84f)}.footer-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:40px;margin-bottom:40px}@media(max-width:992px){.footer-content[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr);gap:30px}}@media(max-width:576px){.footer-content[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:30px}}.footer-column[_ngcontent-%COMP%]   h5.footer-title[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:700;color:#6aa84f;margin-bottom:20px;text-transform:uppercase;letter-spacing:1px;position:relative;padding-bottom:10px}.footer-column[_ngcontent-%COMP%]   h5.footer-title[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;left:0;width:40px;height:3px;background:linear-gradient(90deg,#6aa84f,#5a9440);border-radius:2px}.footer-brand[_ngcontent-%COMP%]{display:flex;align-items:center;gap:15px;margin-bottom:15px}.footer-brand[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%]{height:50px;width:auto;display:block;filter:drop-shadow(0 2px 8px rgba(106,168,79,.3))}.footer-brand[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;margin:0;color:#fff}.footer-tagline[_ngcontent-%COMP%]{font-size:.95rem;color:#cbd5e0;line-height:1.6;margin-bottom:20px}.footer-social[_ngcontent-%COMP%]{display:flex;gap:12px}.footer-social[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:40px;height:40px;background:#6aa84f1a;border:2px solid rgba(106,168,79,.3);border-radius:50%;color:#6aa84f;font-size:1.1rem;transition:all .3s ease}.footer-social[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]:hover{background:linear-gradient(135deg,#6aa84f,#5a9440);border-color:#6aa84f;color:#fff;transform:translateY(-3px);box-shadow:0 6px 16px #6aa84f66}.footer-links[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:12px}.footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;color:#cbd5e0;font-size:.95rem;transition:all .3s ease}.footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#6aa84f;font-size:.9rem;transition:transform .3s ease}.footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff;padding-left:5px;text-decoration:none}.footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{transform:translate(3px);color:#7cbd5f}.footer-contact[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.footer-contact[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;gap:15px;margin-bottom:16px;color:#cbd5e0;font-size:.95rem;line-height:1.6}.footer-contact[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#6aa84f;font-size:1.1rem;min-width:20px;margin-top:2px}.footer-contact[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{flex:1}.footer-dream[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:600;color:#fff;margin-bottom:15px;line-height:1.4}.newsletter[_ngcontent-%COMP%]   .newsletter-text[_ngcontent-%COMP%]{font-size:.9rem;color:#cbd5e0;line-height:1.6;margin-bottom:15px}.footer-bottom[_ngcontent-%COMP%]{border-top:1px solid rgba(255,255,255,.1);padding-top:20px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:15px}.footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:.9rem;color:#a0aec0}.footer-bottom[_ngcontent-%COMP%]   .footer-credit[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px}.footer-bottom[_ngcontent-%COMP%]   .footer-credit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#f56565;animation:_ngcontent-%COMP%_heartBeat 1.5s ease-in-out infinite}@media(max-width:576px){.footer-bottom[_ngcontent-%COMP%]{flex-direction:column;text-align:center}.footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:100%}}@keyframes _ngcontent-%COMP%_heartBeat{0%,to{transform:scale(1)}25%{transform:scale(1.2)}50%{transform:scale(1)}}.scroll-to-top[_ngcontent-%COMP%]{position:fixed;bottom:30px;right:30px;width:50px;height:50px;background:linear-gradient(135deg,#6aa84f,#5a9440);color:#fff;border:none;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 20px #6aa84f66;opacity:0;visibility:hidden;transform:translateY(20px);transition:all .3s ease;z-index:999;font-size:1.2rem}.scroll-to-top.visible[_ngcontent-%COMP%]{opacity:1;visibility:visible;transform:translateY(0)}.scroll-to-top[_ngcontent-%COMP%]:hover{background:linear-gradient(135deg,#5a9440,#4a7d33);transform:translateY(-3px);box-shadow:0 8px 25px #6aa84f80}.scroll-to-top[_ngcontent-%COMP%]:active{transform:translateY(-1px)}.scroll-to-top[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_bounceUp 2s ease-in-out infinite}@media(max-width:768px){.scroll-to-top[_ngcontent-%COMP%]{width:45px;height:45px;bottom:20px;right:20px;font-size:1rem}}@keyframes _ngcontent-%COMP%_bounceUp{0%,to{transform:translateY(0)}50%{transform:translateY(-5px)}}@media(max-width:768px){.footer-modern[_ngcontent-%COMP%]{padding:40px 0 20px;margin-top:60px}.footer-brand[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%]{height:40px}.footer-brand[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.3rem}.footer-tagline[_ngcontent-%COMP%], .newsletter-text[_ngcontent-%COMP%]{font-size:.9rem}}']})};var C0=class a{constructor(l,t,i,h,e,r){this.renderer=l;this.router=t;this.document=i;this.platformId=h;this.element=e;this.location=r}navbarr;isProductPage=!1;ngOnInit(){if(!Y(this.platformId))return;let l=this.element.nativeElement.children[0].children[0],t=()=>{if(this.router.events.pipe(d0(h=>h instanceof x0)).subscribe(h=>{let e=h.urlAfterRedirects.toLowerCase();if(this.isProductPage=e.includes("/product"),this.isProductPage){l.classList.remove("navbar-transparent");return}else window.pageYOffset<150?l.classList.add("navbar-transparent"):l.classList.remove("navbar-transparent")}),this.isProductPage){l.classList.remove("navbar-transparent");return}window.pageYOffset<150?l.classList.add("navbar-transparent"):l.classList.remove("navbar-transparent")};t(),this.renderer.listen("window","scroll",()=>{t()}),this.renderer.listen("window","popstate",()=>{t()})}removeFooter(){var l=this.location.prepareExternalUrl(this.location.path());return l=l.slice(1),!(l==="signup"||l==="nucleoicons")}static \u0275fac=function(t){return new(t||a)(Z(y1),Z(M0),Z(B1),Z(p0),Z(h0),Z(u0))};static \u0275cmp=R({type:a,selectors:[["app-root"]],viewQuery:function(t,i){if(t&1&&P1(N,5),t&2){let h;D1(h=O1())&&(i.navbarr=h.first)}},standalone:!1,decls:10,vars:0,consts:[["id","main-content"]],template:function(t,i){t&1&&(x(0,"app-navbar"),d(1,"main",0),x(2,"router-outlet"),f(),d(3,"footer"),x(4,"app-footer"),f(),d(5,"noscript")(6,"h1"),u(7,"Riya Orangery \u2013 Indoor Plants & Succulents"),f(),d(8,"p"),u(9," Riya Orangery offers healthy indoor plants, succulents, cactus, and expert plant care tips for homes and offices. "),f()())},dependencies:[Y1,N,H0],encapsulation:2})};function I0(a,l){(l==null||l>a.length)&&(l=a.length);for(var t=0,i=Array(l);t<l;t++)i[t]=a[t];return i}function K2(a){if(Array.isArray(a))return a}function E2(a){if(Array.isArray(a))return I0(a)}function I2(a,l){if(!(a instanceof l))throw new TypeError("Cannot call a class as a function")}function h5(a,l){for(var t=0;t<l.length;t++){var i=l[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(a,O5(i.key),i)}}function N2(a,l,t){return l&&h5(a.prototype,l),t&&h5(a,t),Object.defineProperty(a,"prototype",{writable:!1}),a}function L0(a,l){var t=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!t){if(Array.isArray(a)||(t=g1(a))||l&&a&&typeof a.length=="number"){t&&(a=t);var i=0,h=function(){};return{s:h,n:function(){return i>=a.length?{done:!0}:{done:!1,value:a[i++]}},e:function(o){throw o},f:h}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var e,r=!0,s=!1;return{s:function(){t=t.call(a)},n:function(){var o=t.next();return r=o.done,o},e:function(o){s=!0,e=o},f:function(){try{r||t.return==null||t.return()}finally{if(s)throw e}}}}function p(a,l,t){return(l=O5(l))in a?Object.defineProperty(a,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[l]=t,a}function a3(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function l3(a,l){var t=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(t!=null){var i,h,e,r,s=[],o=!0,c=!1;try{if(e=(t=t.call(a)).next,l===0){if(Object(t)!==t)return;o=!1}else for(;!(o=(i=e.call(t)).done)&&(s.push(i.value),s.length!==l);o=!0);}catch(g){c=!0,h=g}finally{try{if(!o&&t.return!=null&&(r=t.return(),Object(r)!==r))return}finally{if(c)throw h}}return s}}function t3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e5(a,l){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);l&&(i=i.filter(function(h){return Object.getOwnPropertyDescriptor(a,h).enumerable})),t.push.apply(t,i)}return t}function v(a){for(var l=1;l<arguments.length;l++){var t=arguments[l]!=null?arguments[l]:{};l%2?e5(Object(t),!0).forEach(function(i){p(a,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):e5(Object(t)).forEach(function(i){Object.defineProperty(a,i,Object.getOwnPropertyDescriptor(t,i))})}return a}function P0(a,l){return K2(a)||l3(a,l)||g1(a,l)||t3()}function y(a){return E2(a)||a3(a)||g1(a)||i3()}function h3(a,l){if(typeof a!="object"||!a)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var i=t.call(a,l||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(a)}function O5(a){var l=h3(a,"string");return typeof l=="symbol"?l:l+""}function k0(a){"@babel/helpers - typeof";return k0=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},k0(a)}function g1(a,l){if(a){if(typeof a=="string")return I0(a,l);var t={}.toString.call(a).slice(8,-1);return t==="Object"&&a.constructor&&(t=a.constructor.name),t==="Map"||t==="Set"?Array.from(a):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?I0(a,l):void 0}}var r5=function(){},d1={},q5={},_5=null,T5={mark:r5,measure:r5};try{typeof window<"u"&&(d1=window),typeof document<"u"&&(q5=document),typeof MutationObserver<"u"&&(_5=MutationObserver),typeof performance<"u"&&(T5=performance)}catch{}var e3=d1.navigator||{},s5=e3.userAgent,o5=s5===void 0?"":s5,$=d1,M=q5,v5=_5,A0=T5,Ia=!!$.document,_=!!M.documentElement&&!!M.head&&typeof M.addEventListener=="function"&&typeof M.createElement=="function",R5=~o5.indexOf("MSIE")||~o5.indexOf("Trident/"),X0,r3=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,s3=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,j5={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},o3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},U5=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],C="classic",w0="duotone",W5="sharp",$5="sharp-duotone",X5="chisel",G5="etch",Y5="jelly",J5="jelly-duo",Q5="jelly-fill",K5="notdog",E5="notdog-duo",I5="slab",N5="slab-press",a2="thumbprint",l2="utility",t2="utility-duo",i2="utility-fill",h2="whiteboard",v3="Classic",c3="Duotone",w3="Sharp",n3="Sharp Duotone",g3="Chisel",d3="Etch",p3="Jelly",f3="Jelly Duo",b3="Jelly Fill",z3="Notdog",u3="Notdog Duo",x3="Slab",M3="Slab Press",m3="Thumbprint",V3="Utility",H3="Utility Duo",C3="Utility Fill",A3="Whiteboard",e2=[C,w0,W5,$5,X5,G5,Y5,J5,Q5,K5,E5,I5,N5,a2,l2,t2,i2,h2],Na=(X0={},p(p(p(p(p(p(p(p(p(p(X0,C,v3),w0,c3),W5,w3),$5,n3),X5,g3),G5,d3),Y5,p3),J5,f3),Q5,b3),K5,z3),p(p(p(p(p(p(p(p(X0,E5,u3),I5,x3),N5,M3),a2,m3),l2,V3),t2,H3),i2,C3),h2,A3)),Z3={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},L3={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},B3=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),F3={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},r2=["fak","fa-kit","fakd","fa-kit-duotone"],c5={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},k3=["kit"],y3="kit",S3="kit-duotone",P3="Kit",D3="Kit Duotone",a7=p(p({},y3,P3),S3,D3),O3={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},q3={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},_3={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},w5={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},G0,Z0={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},T3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],R3="classic",j3="duotone",U3="sharp",W3="sharp-duotone",$3="chisel",X3="etch",G3="jelly",Y3="jelly-duo",J3="jelly-fill",Q3="notdog",K3="notdog-duo",E3="slab",I3="slab-press",N3="thumbprint",a6="utility",l6="utility-duo",t6="utility-fill",i6="whiteboard",h6="Classic",e6="Duotone",r6="Sharp",s6="Sharp Duotone",o6="Chisel",v6="Etch",c6="Jelly",w6="Jelly Duo",n6="Jelly Fill",g6="Notdog",d6="Notdog Duo",p6="Slab",f6="Slab Press",b6="Thumbprint",z6="Utility",u6="Utility Duo",x6="Utility Fill",M6="Whiteboard",l7=(G0={},p(p(p(p(p(p(p(p(p(p(G0,R3,h6),j3,e6),U3,r6),W3,s6),$3,o6),X3,v6),G3,c6),Y3,w6),J3,n6),Q3,g6),p(p(p(p(p(p(p(p(G0,K3,d6),E3,p6),I3,f6),N3,b6),a6,z6),l6,u6),t6,x6),i6,M6)),m6="kit",V6="kit-duotone",H6="Kit",C6="Kit Duotone",t7=p(p({},m6,H6),V6,C6),A6={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},Z6={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},N0={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},L6=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],s2=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(T3,L6),B6=["solid","regular","light","thin","duotone","brands","semibold"],o2=[1,2,3,4,5,6,7,8,9,10],F6=o2.concat([11,12,13,14,15,16,17,18,19,20]),k6=["aw","fw","pull-left","pull-right"],y6=[].concat(y(Object.keys(Z6)),B6,k6,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Z0.GROUP,Z0.SWAP_OPACITY,Z0.PRIMARY,Z0.SECONDARY]).concat(o2.map(function(a){return"".concat(a,"x")})).concat(F6.map(function(a){return"w-".concat(a)})),S6={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},O="___FONT_AWESOME___",a1=16,v2="fa",c2="svg-inline--fa",Q="data-fa-i2svg",l1="data-fa-pseudo-element",P6="data-fa-pseudo-element-pending",p1="data-prefix",f1="data-icon",n5="fontawesome-i2svg",D6="async",O6=["HTML","HEAD","STYLE","SCRIPT"],w2=["::before","::after",":before",":after"],n2=(function(){try{return!0}catch{return!1}})();function n0(a){return new Proxy(a,{get:function(t,i){return i in t?t[i]:t[C]}})}var g2=v({},j5);g2[C]=v(v(v(v({},{"fa-duotone":"duotone"}),j5[C]),c5.kit),c5["kit-duotone"]);var q6=n0(g2),t1=v({},F3);t1[C]=v(v(v(v({},{duotone:"fad"}),t1[C]),w5.kit),w5["kit-duotone"]);var g5=n0(t1),i1=v({},N0);i1[C]=v(v({},i1[C]),_3.kit);var b1=n0(i1),h1=v({},A6);h1[C]=v(v({},h1[C]),O3.kit);var i7=n0(h1),_6=r3,d2="fa-layers-text",T6=s3,R6=v({},Z3),h7=n0(R6),j6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Y0=o3,U6=[].concat(y(k3),y(y6)),o0=$.FontAwesomeConfig||{};function W6(a){var l=M.querySelector("script["+a+"]");if(l)return l.getAttribute(a)}function $6(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}M&&typeof M.querySelector=="function"&&(d5=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],d5.forEach(function(a){var l=P0(a,2),t=l[0],i=l[1],h=$6(W6(t));h!=null&&(o0[i]=h)}));var d5,p2={styleDefault:"solid",familyDefault:C,cssPrefix:v2,replacementClass:c2,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};o0.familyPrefix&&(o0.cssPrefix=o0.familyPrefix);var t0=v(v({},p2),o0);t0.autoReplaceSvg||(t0.observeMutations=!1);var n={};Object.keys(p2).forEach(function(a){Object.defineProperty(n,a,{enumerable:!0,set:function(t){t0[a]=t,v0.forEach(function(i){return i(n)})},get:function(){return t0[a]}})});Object.defineProperty(n,"familyPrefix",{enumerable:!0,set:function(l){t0.cssPrefix=l,v0.forEach(function(t){return t(n)})},get:function(){return t0.cssPrefix}});$.FontAwesomeConfig=n;var v0=[];function X6(a){return v0.push(a),function(){v0.splice(v0.indexOf(a),1)}}var W=a1,P={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function G6(a){if(!(!a||!_)){var l=M.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=a;for(var t=M.head.childNodes,i=null,h=t.length-1;h>-1;h--){var e=t[h],r=(e.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(r)>-1&&(i=e)}return M.head.insertBefore(l,i),a}}var Y6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function p5(){for(var a=12,l="";a-- >0;)l+=Y6[Math.random()*62|0];return l}function i0(a){for(var l=[],t=(a||[]).length>>>0;t--;)l[t]=a[t];return l}function z1(a){return a.classList?i0(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(l){return l})}function f2(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function J6(a){return Object.keys(a||{}).reduce(function(l,t){return l+"".concat(t,'="').concat(f2(a[t]),'" ')},"").trim()}function D0(a){return Object.keys(a||{}).reduce(function(l,t){return l+"".concat(t,": ").concat(a[t].trim(),";")},"")}function u1(a){return a.size!==P.size||a.x!==P.x||a.y!==P.y||a.rotate!==P.rotate||a.flipX||a.flipY}function Q6(a){var l=a.transform,t=a.containerWidth,i=a.iconWidth,h={transform:"translate(".concat(t/2," 256)")},e="translate(".concat(l.x*32,", ").concat(l.y*32,") "),r="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),s="rotate(".concat(l.rotate," 0 0)"),o={transform:"".concat(e," ").concat(r," ").concat(s)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:h,inner:o,path:c}}function K6(a){var l=a.transform,t=a.width,i=t===void 0?a1:t,h=a.height,e=h===void 0?a1:h,r=a.startCentered,s=r===void 0?!1:r,o="";return s&&R5?o+="translate(".concat(l.x/W-i/2,"em, ").concat(l.y/W-e/2,"em) "):s?o+="translate(calc(-50% + ".concat(l.x/W,"em), calc(-50% + ").concat(l.y/W,"em)) "):o+="translate(".concat(l.x/W,"em, ").concat(l.y/W,"em) "),o+="scale(".concat(l.size/W*(l.flipX?-1:1),", ").concat(l.size/W*(l.flipY?-1:1),") "),o+="rotate(".concat(l.rotate,"deg) "),o}var E6=`:root, :host {
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
}`;function b2(){var a=v2,l=c2,t=n.cssPrefix,i=n.replacementClass,h=E6;if(t!==a||i!==l){var e=new RegExp("\\.".concat(a,"\\-"),"g"),r=new RegExp("\\--".concat(a,"\\-"),"g"),s=new RegExp("\\.".concat(l),"g");h=h.replace(e,".".concat(t,"-")).replace(r,"--".concat(t,"-")).replace(s,".".concat(i))}return h}var f5=!1;function J0(){n.autoAddCss&&!f5&&(G6(b2()),f5=!0)}var I6={mixout:function(){return{dom:{css:b2,insertCss:J0}}},hooks:function(){return{beforeDOMElementCreation:function(){J0()},beforeI2svg:function(){J0()}}}},q=$||{};q[O]||(q[O]={});q[O].styles||(q[O].styles={});q[O].hooks||(q[O].hooks={});q[O].shims||(q[O].shims=[]);var k=q[O],z2=[],u2=function(){M.removeEventListener("DOMContentLoaded",u2),y0=1,z2.map(function(l){return l()})},y0=!1;_&&(y0=(M.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(M.readyState),y0||M.addEventListener("DOMContentLoaded",u2));function N6(a){_&&(y0?setTimeout(a,0):z2.push(a))}function g0(a){var l=a.tag,t=a.attributes,i=t===void 0?{}:t,h=a.children,e=h===void 0?[]:h;return typeof a=="string"?f2(a):"<".concat(l," ").concat(J6(i),">").concat(e.map(g0).join(""),"</").concat(l,">")}function b5(a,l,t){if(a&&a[l]&&a[l][t])return{prefix:l,iconName:t,icon:a[l][t]}}var a4=function(l,t){return function(i,h,e,r){return l.call(t,i,h,e,r)}},Q0=function(l,t,i,h){var e=Object.keys(l),r=e.length,s=h!==void 0?a4(t,h):t,o,c,g;for(i===void 0?(o=1,g=l[e[0]]):(o=0,g=i);o<r;o++)c=e[o],g=s(g,l[c],c,l);return g};function x2(a){return y(a).length!==1?null:a.codePointAt(0).toString(16)}function z5(a){return Object.keys(a).reduce(function(l,t){var i=a[t],h=!!i.icon;return h?l[i.iconName]=i.icon:l[t]=i,l},{})}function e1(a,l){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.skipHooks,h=i===void 0?!1:i,e=z5(l);typeof k.hooks.addPack=="function"&&!h?k.hooks.addPack(a,z5(l)):k.styles[a]=v(v({},k.styles[a]||{}),e),a==="fas"&&e1("fa",l)}var c0=k.styles,l4=k.shims,M2=Object.keys(b1),t4=M2.reduce(function(a,l){return a[l]=Object.keys(b1[l]),a},{}),x1=null,m2={},V2={},H2={},C2={},A2={};function i4(a){return~U6.indexOf(a)}function h4(a,l){var t=l.split("-"),i=t[0],h=t.slice(1).join("-");return i===a&&h!==""&&!i4(h)?h:null}var Z2=function(){var l=function(e){return Q0(c0,function(r,s,o){return r[o]=Q0(s,e,{}),r},{})};m2=l(function(h,e,r){if(e[3]&&(h[e[3]]=r),e[2]){var s=e[2].filter(function(o){return typeof o=="number"});s.forEach(function(o){h[o.toString(16)]=r})}return h}),V2=l(function(h,e,r){if(h[r]=r,e[2]){var s=e[2].filter(function(o){return typeof o=="string"});s.forEach(function(o){h[o]=r})}return h}),A2=l(function(h,e,r){var s=e[2];return h[r]=r,s.forEach(function(o){h[o]=r}),h});var t="far"in c0||n.autoFetchSvg,i=Q0(l4,function(h,e){var r=e[0],s=e[1],o=e[2];return s==="far"&&!t&&(s="fas"),typeof r=="string"&&(h.names[r]={prefix:s,iconName:o}),typeof r=="number"&&(h.unicodes[r.toString(16)]={prefix:s,iconName:o}),h},{names:{},unicodes:{}});H2=i.names,C2=i.unicodes,x1=O0(n.styleDefault,{family:n.familyDefault})};X6(function(a){x1=O0(a.styleDefault,{family:n.familyDefault})});Z2();function M1(a,l){return(m2[a]||{})[l]}function e4(a,l){return(V2[a]||{})[l]}function J(a,l){return(A2[a]||{})[l]}function L2(a){return H2[a]||{prefix:null,iconName:null}}function r4(a){var l=C2[a],t=M1("fas",a);return l||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function X(){return x1}var B2=function(){return{prefix:null,iconName:null,rest:[]}};function s4(a){var l=C,t=M2.reduce(function(i,h){return i[h]="".concat(n.cssPrefix,"-").concat(h),i},{});return e2.forEach(function(i){(a.includes(t[i])||a.some(function(h){return t4[i].includes(h)}))&&(l=i)}),l}function O0(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=l.family,i=t===void 0?C:t,h=q6[i][a];if(i===w0&&!a)return"fad";var e=g5[i][a]||g5[i][h],r=a in k.styles?a:null,s=e||r||null;return s}function o4(a){var l=[],t=null;return a.forEach(function(i){var h=h4(n.cssPrefix,i);h?t=h:i&&l.push(i)}),{iconName:t,rest:l}}function u5(a){return a.sort().filter(function(l,t,i){return i.indexOf(l)===t})}var x5=s2.concat(r2);function q0(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=l.skipLookups,i=t===void 0?!1:t,h=null,e=u5(a.filter(function(b){return x5.includes(b)})),r=u5(a.filter(function(b){return!x5.includes(b)})),s=e.filter(function(b){return h=b,!U5.includes(b)}),o=P0(s,1),c=o[0],g=c===void 0?null:c,w=s4(e),z=v(v({},o4(r)),{},{prefix:O0(g,{family:w})});return v(v(v({},z),n4({values:a,family:w,styles:c0,config:n,canonical:z,givenPrefix:h})),v4(i,h,z))}function v4(a,l,t){var i=t.prefix,h=t.iconName;if(a||!i||!h)return{prefix:i,iconName:h};var e=l==="fa"?L2(h):{},r=J(i,h);return h=e.iconName||r||h,i=e.prefix||i,i==="far"&&!c0.far&&c0.fas&&!n.autoFetchSvg&&(i="fas"),{prefix:i,iconName:h}}var c4=e2.filter(function(a){return a!==C||a!==w0}),w4=Object.keys(N0).filter(function(a){return a!==C}).map(function(a){return Object.keys(N0[a])}).flat();function n4(a){var l=a.values,t=a.family,i=a.canonical,h=a.givenPrefix,e=h===void 0?"":h,r=a.styles,s=r===void 0?{}:r,o=a.config,c=o===void 0?{}:o,g=t===w0,w=l.includes("fa-duotone")||l.includes("fad"),z=c.familyDefault==="duotone",b=i.prefix==="fad"||i.prefix==="fa-duotone";if(!g&&(w||z||b)&&(i.prefix="fad"),(l.includes("fa-brands")||l.includes("fab"))&&(i.prefix="fab"),!i.prefix&&c4.includes(t)){var V=Object.keys(s).find(function(A){return w4.includes(A)});if(V||c.autoFetchSvg){var m=B3.get(t).defaultShortPrefixId;i.prefix=m,i.iconName=J(i.prefix,i.iconName)||i.iconName}}return(i.prefix==="fa"||e==="fa")&&(i.prefix=X()||"fas"),i}var g4=(function(){function a(){I2(this,a),this.definitions={}}return N2(a,[{key:"add",value:function(){for(var t=this,i=arguments.length,h=new Array(i),e=0;e<i;e++)h[e]=arguments[e];var r=h.reduce(this._pullDefinitions,{});Object.keys(r).forEach(function(s){t.definitions[s]=v(v({},t.definitions[s]||{}),r[s]),e1(s,r[s]);var o=b1[C][s];o&&e1(o,r[s]),Z2()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,i){var h=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(h).map(function(e){var r=h[e],s=r.prefix,o=r.iconName,c=r.icon,g=c[2];t[s]||(t[s]={}),g.length>0&&g.forEach(function(w){typeof w=="string"&&(t[s][w]=c)}),t[s][o]=c}),t}}])})(),M5=[],a0={},l0={},d4=Object.keys(l0);function p4(a,l){var t=l.mixoutsTo;return M5=a,a0={},Object.keys(l0).forEach(function(i){d4.indexOf(i)===-1&&delete l0[i]}),M5.forEach(function(i){var h=i.mixout?i.mixout():{};if(Object.keys(h).forEach(function(r){typeof h[r]=="function"&&(t[r]=h[r]),k0(h[r])==="object"&&Object.keys(h[r]).forEach(function(s){t[r]||(t[r]={}),t[r][s]=h[r][s]})}),i.hooks){var e=i.hooks();Object.keys(e).forEach(function(r){a0[r]||(a0[r]=[]),a0[r].push(e[r])})}i.provides&&i.provides(l0)}),t}function r1(a,l){for(var t=arguments.length,i=new Array(t>2?t-2:0),h=2;h<t;h++)i[h-2]=arguments[h];var e=a0[a]||[];return e.forEach(function(r){l=r.apply(null,[l].concat(i))}),l}function K(a){for(var l=arguments.length,t=new Array(l>1?l-1:0),i=1;i<l;i++)t[i-1]=arguments[i];var h=a0[a]||[];h.forEach(function(e){e.apply(null,t)})}function G(){var a=arguments[0],l=Array.prototype.slice.call(arguments,1);return l0[a]?l0[a].apply(null,l):void 0}function s1(a){a.prefix==="fa"&&(a.prefix="fas");var l=a.iconName,t=a.prefix||X();if(l)return l=J(t,l)||l,b5(F2.definitions,t,l)||b5(k.styles,t,l)}var F2=new g4,f4=function(){n.autoReplaceSvg=!1,n.observeMutations=!1,K("noAuto")},b4={i2svg:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return _?(K("beforeI2svg",l),G("pseudoElements2svg",l),G("i2svg",l)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=l.autoReplaceSvgRoot;n.autoReplaceSvg===!1&&(n.autoReplaceSvg=!0),n.observeMutations=!0,N6(function(){u4({autoReplaceSvgRoot:t}),K("watch",l)})}},z4={icon:function(l){if(l===null)return null;if(k0(l)==="object"&&l.prefix&&l.iconName)return{prefix:l.prefix,iconName:J(l.prefix,l.iconName)||l.iconName};if(Array.isArray(l)&&l.length===2){var t=l[1].indexOf("fa-")===0?l[1].slice(3):l[1],i=O0(l[0]);return{prefix:i,iconName:J(i,t)||t}}if(typeof l=="string"&&(l.indexOf("".concat(n.cssPrefix,"-"))>-1||l.match(_6))){var h=q0(l.split(" "),{skipLookups:!0});return{prefix:h.prefix||X(),iconName:J(h.prefix,h.iconName)||h.iconName}}if(typeof l=="string"){var e=X();return{prefix:e,iconName:J(e,l)||l}}}},B={noAuto:f4,config:n,dom:b4,parse:z4,library:F2,findIconDefinition:s1,toHtml:g0},u4=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=l.autoReplaceSvgRoot,i=t===void 0?M:t;(Object.keys(k.styles).length>0||n.autoFetchSvg)&&_&&n.autoReplaceSvg&&B.dom.i2svg({node:i})};function _0(a,l){return Object.defineProperty(a,"abstract",{get:l}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(i){return g0(i)})}}),Object.defineProperty(a,"node",{get:function(){if(_){var i=M.createElement("div");return i.innerHTML=a.html,i.children}}}),a}function x4(a){var l=a.children,t=a.main,i=a.mask,h=a.attributes,e=a.styles,r=a.transform;if(u1(r)&&t.found&&!i.found){var s=t.width,o=t.height,c={x:s/o/2,y:.5};h.style=D0(v(v({},e),{},{"transform-origin":"".concat(c.x+r.x/16,"em ").concat(c.y+r.y/16,"em")}))}return[{tag:"svg",attributes:h,children:l}]}function M4(a){var l=a.prefix,t=a.iconName,i=a.children,h=a.attributes,e=a.symbol,r=e===!0?"".concat(l,"-").concat(n.cssPrefix,"-").concat(t):e;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:v(v({},h),{},{id:r}),children:i}]}]}function m4(a){var l=["aria-label","aria-labelledby","title","role"];return l.some(function(t){return t in a})}function m1(a){var l=a.icons,t=l.main,i=l.mask,h=a.prefix,e=a.iconName,r=a.transform,s=a.symbol,o=a.maskId,c=a.extra,g=a.watchable,w=g===void 0?!1:g,z=i.found?i:t,b=z.width,V=z.height,m=[n.replacementClass,e?"".concat(n.cssPrefix,"-").concat(e):""].filter(function(D){return c.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(c.classes).join(" "),A={children:[],attributes:v(v({},c.attributes),{},{"data-prefix":h,"data-icon":e,class:m,role:c.attributes.role||"img",viewBox:"0 0 ".concat(b," ").concat(V)})};!m4(c.attributes)&&!c.attributes["aria-hidden"]&&(A.attributes["aria-hidden"]="true"),w&&(A.attributes[Q]="");var H=v(v({},A),{},{prefix:h,iconName:e,main:t,mask:i,maskId:o,transform:r,symbol:s,styles:v({},c.styles)}),L=i.found&&t.found?G("generateAbstractMask",H)||{children:[],attributes:{}}:G("generateAbstractIcon",H)||{children:[],attributes:{}},F=L.children,E=L.attributes;return H.children=F,H.attributes=E,s?M4(H):x4(H)}function m5(a){var l=a.content,t=a.width,i=a.height,h=a.transform,e=a.extra,r=a.watchable,s=r===void 0?!1:r,o=v(v({},e.attributes),{},{class:e.classes.join(" ")});s&&(o[Q]="");var c=v({},e.styles);u1(h)&&(c.transform=K6({transform:h,startCentered:!0,width:t,height:i}),c["-webkit-transform"]=c.transform);var g=D0(c);g.length>0&&(o.style=g);var w=[];return w.push({tag:"span",attributes:o,children:[l]}),w}function V4(a){var l=a.content,t=a.extra,i=v(v({},t.attributes),{},{class:t.classes.join(" ")}),h=D0(t.styles);h.length>0&&(i.style=h);var e=[];return e.push({tag:"span",attributes:i,children:[l]}),e}var K0=k.styles;function o1(a){var l=a[0],t=a[1],i=a.slice(4),h=P0(i,1),e=h[0],r=null;return Array.isArray(e)?r={tag:"g",attributes:{class:"".concat(n.cssPrefix,"-").concat(Y0.GROUP)},children:[{tag:"path",attributes:{class:"".concat(n.cssPrefix,"-").concat(Y0.SECONDARY),fill:"currentColor",d:e[0]}},{tag:"path",attributes:{class:"".concat(n.cssPrefix,"-").concat(Y0.PRIMARY),fill:"currentColor",d:e[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:e}},{found:!0,width:l,height:t,icon:r}}var H4={found:!1,width:512,height:512};function C4(a,l){!n2&&!n.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(l,'" is missing.'))}function v1(a,l){var t=l;return l==="fa"&&n.styleDefault!==null&&(l=X()),new Promise(function(i,h){if(t==="fa"){var e=L2(a)||{};a=e.iconName||a,l=e.prefix||l}if(a&&l&&K0[l]&&K0[l][a]){var r=K0[l][a];return i(o1(r))}C4(a,l),i(v(v({},H4),{},{icon:n.showMissingIcons&&a?G("missingIconAbstract")||{}:{}}))})}var V5=function(){},c1=n.measurePerformance&&A0&&A0.mark&&A0.measure?A0:{mark:V5,measure:V5},s0='FA "7.1.0"',A4=function(l){return c1.mark("".concat(s0," ").concat(l," begins")),function(){return k2(l)}},k2=function(l){c1.mark("".concat(s0," ").concat(l," ends")),c1.measure("".concat(s0," ").concat(l),"".concat(s0," ").concat(l," begins"),"".concat(s0," ").concat(l," ends"))},V1={begin:A4,end:k2},B0=function(){};function H5(a){var l=a.getAttribute?a.getAttribute(Q):null;return typeof l=="string"}function Z4(a){var l=a.getAttribute?a.getAttribute(p1):null,t=a.getAttribute?a.getAttribute(f1):null;return l&&t}function L4(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(n.replacementClass)}function B4(){if(n.autoReplaceSvg===!0)return F0.replace;var a=F0[n.autoReplaceSvg];return a||F0.replace}function F4(a){return M.createElementNS("http://www.w3.org/2000/svg",a)}function k4(a){return M.createElement(a)}function y2(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=l.ceFn,i=t===void 0?a.tag==="svg"?F4:k4:t;if(typeof a=="string")return M.createTextNode(a);var h=i(a.tag);Object.keys(a.attributes||[]).forEach(function(r){h.setAttribute(r,a.attributes[r])});var e=a.children||[];return e.forEach(function(r){h.appendChild(y2(r,{ceFn:i}))}),h}function y4(a){var l=" ".concat(a.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}var F0={replace:function(l){var t=l[0];if(t.parentNode)if(l[1].forEach(function(h){t.parentNode.insertBefore(y2(h),t)}),t.getAttribute(Q)===null&&n.keepOriginalSource){var i=M.createComment(y4(t));t.parentNode.replaceChild(i,t)}else t.remove()},nest:function(l){var t=l[0],i=l[1];if(~z1(t).indexOf(n.replacementClass))return F0.replace(l);var h=new RegExp("".concat(n.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var e=i[0].attributes.class.split(" ").reduce(function(s,o){return o===n.replacementClass||o.match(h)?s.toSvg.push(o):s.toNode.push(o),s},{toNode:[],toSvg:[]});i[0].attributes.class=e.toSvg.join(" "),e.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",e.toNode.join(" "))}var r=i.map(function(s){return g0(s)}).join(`
`);t.setAttribute(Q,""),t.innerHTML=r}};function C5(a){a()}function S2(a,l){var t=typeof l=="function"?l:B0;if(a.length===0)t();else{var i=C5;n.mutateApproach===D6&&(i=$.requestAnimationFrame||C5),i(function(){var h=B4(),e=V1.begin("mutate");a.map(h),e(),t()})}}var H1=!1;function P2(){H1=!0}function w1(){H1=!1}var S0=null;function A5(a){if(v5&&n.observeMutations){var l=a.treeCallback,t=l===void 0?B0:l,i=a.nodeCallback,h=i===void 0?B0:i,e=a.pseudoElementsCallback,r=e===void 0?B0:e,s=a.observeMutationsRoot,o=s===void 0?M:s;S0=new v5(function(c){if(!H1){var g=X();i0(c).forEach(function(w){if(w.type==="childList"&&w.addedNodes.length>0&&!H5(w.addedNodes[0])&&(n.searchPseudoElements&&r(w.target),t(w.target)),w.type==="attributes"&&w.target.parentNode&&n.searchPseudoElements&&r([w.target],!0),w.type==="attributes"&&H5(w.target)&&~j6.indexOf(w.attributeName))if(w.attributeName==="class"&&Z4(w.target)){var z=q0(z1(w.target)),b=z.prefix,V=z.iconName;w.target.setAttribute(p1,b||g),V&&w.target.setAttribute(f1,V)}else L4(w.target)&&h(w.target)})}}),_&&S0.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function S4(){S0&&S0.disconnect()}function P4(a){var l=a.getAttribute("style"),t=[];return l&&(t=l.split(";").reduce(function(i,h){var e=h.split(":"),r=e[0],s=e.slice(1);return r&&s.length>0&&(i[r]=s.join(":").trim()),i},{})),t}function D4(a){var l=a.getAttribute("data-prefix"),t=a.getAttribute("data-icon"),i=a.innerText!==void 0?a.innerText.trim():"",h=q0(z1(a));return h.prefix||(h.prefix=X()),l&&t&&(h.prefix=l,h.iconName=t),h.iconName&&h.prefix||(h.prefix&&i.length>0&&(h.iconName=e4(h.prefix,a.innerText)||M1(h.prefix,x2(a.innerText))),!h.iconName&&n.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(h.iconName=a.firstChild.data)),h}function O4(a){var l=i0(a.attributes).reduce(function(t,i){return t.name!=="class"&&t.name!=="style"&&(t[i.name]=i.value),t},{});return l}function q4(){return{iconName:null,prefix:null,transform:P,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Z5(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=D4(a),i=t.iconName,h=t.prefix,e=t.rest,r=O4(a),s=r1("parseNodeAttributes",{},a),o=l.styleParser?P4(a):[];return v({iconName:i,prefix:h,transform:P,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:e,styles:o,attributes:r}},s)}var _4=k.styles;function D2(a){var l=n.autoReplaceSvg==="nest"?Z5(a,{styleParser:!1}):Z5(a);return~l.extra.classes.indexOf(d2)?G("generateLayersText",a,l):G("generateSvgReplacementMutation",a,l)}function T4(){return[].concat(y(r2),y(s2))}function L5(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!_)return Promise.resolve();var t=M.documentElement.classList,i=function(w){return t.add("".concat(n5,"-").concat(w))},h=function(w){return t.remove("".concat(n5,"-").concat(w))},e=n.autoFetchSvg?T4():U5.concat(Object.keys(_4));e.includes("fa")||e.push("fa");var r=[".".concat(d2,":not([").concat(Q,"])")].concat(e.map(function(g){return".".concat(g,":not([").concat(Q,"])")})).join(", ");if(r.length===0)return Promise.resolve();var s=[];try{s=i0(a.querySelectorAll(r))}catch{}if(s.length>0)i("pending"),h("complete");else return Promise.resolve();var o=V1.begin("onTree"),c=s.reduce(function(g,w){try{var z=D2(w);z&&g.push(z)}catch(b){n2||b.name==="MissingIcon"&&console.error(b)}return g},[]);return new Promise(function(g,w){Promise.all(c).then(function(z){S2(z,function(){i("active"),i("complete"),h("pending"),typeof l=="function"&&l(),o(),g()})}).catch(function(z){o(),w(z)})})}function R4(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;D2(a).then(function(t){t&&S2([t],l)})}function j4(a){return function(l){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(l||{}).icon?l:s1(l||{}),h=t.mask;return h&&(h=(h||{}).icon?h:s1(h||{})),a(i,v(v({},t),{},{mask:h}))}}var U4=function(l){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.transform,h=i===void 0?P:i,e=t.symbol,r=e===void 0?!1:e,s=t.mask,o=s===void 0?null:s,c=t.maskId,g=c===void 0?null:c,w=t.classes,z=w===void 0?[]:w,b=t.attributes,V=b===void 0?{}:b,m=t.styles,A=m===void 0?{}:m;if(l){var H=l.prefix,L=l.iconName,F=l.icon;return _0(v({type:"icon"},l),function(){return K("beforeDOMElementCreation",{iconDefinition:l,params:t}),m1({icons:{main:o1(F),mask:o?o1(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:L,transform:v(v({},P),h),symbol:r,maskId:g,extra:{attributes:V,styles:A,classes:z}})})}},W4={mixout:function(){return{icon:j4(U4)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=L5,t.nodeCallback=R4,t}}},provides:function(l){l.i2svg=function(t){var i=t.node,h=i===void 0?M:i,e=t.callback,r=e===void 0?function(){}:e;return L5(h,r)},l.generateSvgReplacementMutation=function(t,i){var h=i.iconName,e=i.prefix,r=i.transform,s=i.symbol,o=i.mask,c=i.maskId,g=i.extra;return new Promise(function(w,z){Promise.all([v1(h,e),o.iconName?v1(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(b){var V=P0(b,2),m=V[0],A=V[1];w([t,m1({icons:{main:m,mask:A},prefix:e,iconName:h,transform:r,symbol:s,maskId:c,extra:g,watchable:!0})])}).catch(z)})},l.generateAbstractIcon=function(t){var i=t.children,h=t.attributes,e=t.main,r=t.transform,s=t.styles,o=D0(s);o.length>0&&(h.style=o);var c;return u1(r)&&(c=G("generateAbstractTransformGrouping",{main:e,transform:r,containerWidth:e.width,iconWidth:e.width})),i.push(c||e.icon),{children:i,attributes:h}}}},$4={mixout:function(){return{layer:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},h=i.classes,e=h===void 0?[]:h;return _0({type:"layer"},function(){K("beforeDOMElementCreation",{assembler:t,params:i});var r=[];return t(function(s){Array.isArray(s)?s.map(function(o){r=r.concat(o.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(n.cssPrefix,"-layers")].concat(y(e)).join(" ")},children:r}]})}}}},X4={mixout:function(){return{counter:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},h=i.title,e=h===void 0?null:h,r=i.classes,s=r===void 0?[]:r,o=i.attributes,c=o===void 0?{}:o,g=i.styles,w=g===void 0?{}:g;return _0({type:"counter",content:t},function(){return K("beforeDOMElementCreation",{content:t,params:i}),V4({content:t.toString(),title:e,extra:{attributes:c,styles:w,classes:["".concat(n.cssPrefix,"-layers-counter")].concat(y(s))}})})}}}},G4={mixout:function(){return{text:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},h=i.transform,e=h===void 0?P:h,r=i.classes,s=r===void 0?[]:r,o=i.attributes,c=o===void 0?{}:o,g=i.styles,w=g===void 0?{}:g;return _0({type:"text",content:t},function(){return K("beforeDOMElementCreation",{content:t,params:i}),m5({content:t,transform:v(v({},P),e),extra:{attributes:c,styles:w,classes:["".concat(n.cssPrefix,"-layers-text")].concat(y(s))}})})}}},provides:function(l){l.generateLayersText=function(t,i){var h=i.transform,e=i.extra,r=null,s=null;if(R5){var o=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();r=c.width/o,s=c.height/o}return Promise.resolve([t,m5({content:t.innerHTML,width:r,height:s,transform:h,extra:e,watchable:!0})])}}},O2=new RegExp('"',"ug"),B5=[1105920,1112319],F5=v(v(v(v({},{FontAwesome:{normal:"fas",400:"fas"}}),L3),S6),q3),n1=Object.keys(F5).reduce(function(a,l){return a[l.toLowerCase()]=F5[l],a},{}),Y4=Object.keys(n1).reduce(function(a,l){var t=n1[l];return a[l]=t[900]||y(Object.entries(t))[0][1],a},{});function J4(a){var l=a.replace(O2,"");return x2(y(l)[0]||"")}function Q4(a){var l=a.getPropertyValue("font-feature-settings").includes("ss01"),t=a.getPropertyValue("content"),i=t.replace(O2,""),h=i.codePointAt(0),e=h>=B5[0]&&h<=B5[1],r=i.length===2?i[0]===i[1]:!1;return e||r||l}function K4(a,l){var t=a.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(l),h=isNaN(i)?"normal":i;return(n1[t]||{})[h]||Y4[t]}function k5(a,l){var t="".concat(P6).concat(l.replace(":","-"));return new Promise(function(i,h){if(a.getAttribute(t)!==null)return i();var e=i0(a.children),r=e.filter(function(R0){return R0.getAttribute(l1)===l})[0],s=$.getComputedStyle(a,l),o=s.getPropertyValue("font-family"),c=o.match(T6),g=s.getPropertyValue("font-weight"),w=s.getPropertyValue("content");if(r&&!c)return a.removeChild(r),i();if(c&&w!=="none"&&w!==""){var z=s.getPropertyValue("content"),b=K4(o,g),V=J4(z),m=c[0].startsWith("FontAwesome"),A=Q4(s),H=M1(b,V),L=H;if(m){var F=r4(V);F.iconName&&F.prefix&&(H=F.iconName,b=F.prefix)}if(H&&!A&&(!r||r.getAttribute(p1)!==b||r.getAttribute(f1)!==L)){a.setAttribute(t,L),r&&a.removeChild(r);var E=q4(),D=E.extra;D.attributes[l1]=l,v1(H,b).then(function(R0){var j2=m1(v(v({},E),{},{icons:{main:R0,mask:B2()},prefix:b,iconName:L,extra:D,watchable:!0})),j0=M.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?a.insertBefore(j0,a.firstChild):a.appendChild(j0),j0.outerHTML=j2.map(function(U2){return g0(U2)}).join(`
`),a.removeAttribute(t),i()}).catch(h)}else i()}else i()})}function E4(a){return Promise.all([k5(a,"::before"),k5(a,"::after")])}function I4(a){return a.parentNode!==document.head&&!~O6.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(l1)&&(!a.parentNode||a.parentNode.tagName!=="svg")}var N4=function(l){return!!l&&w2.some(function(t){return l.includes(t)})},aa=function(l){if(!l)return[];var t=new Set,i=l.split(/,(?![^()]*\))/).map(function(o){return o.trim()});i=i.flatMap(function(o){return o.includes("(")?o:o.split(",").map(function(c){return c.trim()})});var h=L0(i),e;try{for(h.s();!(e=h.n()).done;){var r=e.value;if(N4(r)){var s=w2.reduce(function(o,c){return o.replace(c,"")},r);s!==""&&s!=="*"&&t.add(s)}}}catch(o){h.e(o)}finally{h.f()}return t};function y5(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(_){var t;if(l)t=a;else if(n.searchPseudoElementsFullScan)t=a.querySelectorAll("*");else{var i=new Set,h=L0(document.styleSheets),e;try{for(h.s();!(e=h.n()).done;){var r=e.value;try{var s=L0(r.cssRules),o;try{for(s.s();!(o=s.n()).done;){var c=o.value,g=aa(c.selectorText),w=L0(g),z;try{for(w.s();!(z=w.n()).done;){var b=z.value;i.add(b)}}catch(m){w.e(m)}finally{w.f()}}}catch(m){s.e(m)}finally{s.f()}}catch(m){n.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(r.href," (").concat(m.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(m){h.e(m)}finally{h.f()}if(!i.size)return;var V=Array.from(i).join(", ");try{t=a.querySelectorAll(V)}catch{}}return new Promise(function(m,A){var H=i0(t).filter(I4).map(E4),L=V1.begin("searchPseudoElements");P2(),Promise.all(H).then(function(){L(),w1(),m()}).catch(function(){L(),w1(),A()})})}}var la={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=y5,t}}},provides:function(l){l.pseudoElements2svg=function(t){var i=t.node,h=i===void 0?M:i;n.searchPseudoElements&&y5(h)}}},S5=!1,ta={mixout:function(){return{dom:{unwatch:function(){P2(),S5=!0}}}},hooks:function(){return{bootstrap:function(){A5(r1("mutationObserverCallbacks",{}))},noAuto:function(){S4()},watch:function(t){var i=t.observeMutationsRoot;S5?w1():A5(r1("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},P5=function(l){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return l.toLowerCase().split(" ").reduce(function(i,h){var e=h.toLowerCase().split("-"),r=e[0],s=e.slice(1).join("-");if(r&&s==="h")return i.flipX=!0,i;if(r&&s==="v")return i.flipY=!0,i;if(s=parseFloat(s),isNaN(s))return i;switch(r){case"grow":i.size=i.size+s;break;case"shrink":i.size=i.size-s;break;case"left":i.x=i.x-s;break;case"right":i.x=i.x+s;break;case"up":i.y=i.y-s;break;case"down":i.y=i.y+s;break;case"rotate":i.rotate=i.rotate+s;break}return i},t)},ia={mixout:function(){return{parse:{transform:function(t){return P5(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,i){var h=i.getAttribute("data-fa-transform");return h&&(t.transform=P5(h)),t}}},provides:function(l){l.generateAbstractTransformGrouping=function(t){var i=t.main,h=t.transform,e=t.containerWidth,r=t.iconWidth,s={transform:"translate(".concat(e/2," 256)")},o="translate(".concat(h.x*32,", ").concat(h.y*32,") "),c="scale(".concat(h.size/16*(h.flipX?-1:1),", ").concat(h.size/16*(h.flipY?-1:1),") "),g="rotate(".concat(h.rotate," 0 0)"),w={transform:"".concat(o," ").concat(c," ").concat(g)},z={transform:"translate(".concat(r/2*-1," -256)")},b={outer:s,inner:w,path:z};return{tag:"g",attributes:v({},b.outer),children:[{tag:"g",attributes:v({},b.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:v(v({},i.icon.attributes),b.path)}]}]}}}},E0={x:0,y:0,width:"100%",height:"100%"};function D5(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||l)&&(a.attributes.fill="black"),a}function ha(a){return a.tag==="g"?a.children:[a]}var ea={hooks:function(){return{parseNodeAttributes:function(t,i){var h=i.getAttribute("data-fa-mask"),e=h?q0(h.split(" ").map(function(r){return r.trim()})):B2();return e.prefix||(e.prefix=X()),t.mask=e,t.maskId=i.getAttribute("data-fa-mask-id"),t}}},provides:function(l){l.generateAbstractMask=function(t){var i=t.children,h=t.attributes,e=t.main,r=t.mask,s=t.maskId,o=t.transform,c=e.width,g=e.icon,w=r.width,z=r.icon,b=Q6({transform:o,containerWidth:w,iconWidth:c}),V={tag:"rect",attributes:v(v({},E0),{},{fill:"white"})},m=g.children?{children:g.children.map(D5)}:{},A={tag:"g",attributes:v({},b.inner),children:[D5(v({tag:g.tag,attributes:v(v({},g.attributes),b.path)},m))]},H={tag:"g",attributes:v({},b.outer),children:[A]},L="mask-".concat(s||p5()),F="clip-".concat(s||p5()),E={tag:"mask",attributes:v(v({},E0),{},{id:L,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[V,H]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:ha(z)},E]};return i.push(D,{tag:"rect",attributes:v({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(L,")")},E0)}),{children:i,attributes:h}}}},ra={provides:function(l){var t=!1;$.matchMedia&&(t=$.matchMedia("(prefers-reduced-motion: reduce)").matches),l.missingIconAbstract=function(){var i=[],h={fill:"currentColor"},e={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:v(v({},h),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var r=v(v({},e),{},{attributeName:"opacity"}),s={tag:"circle",attributes:v(v({},h),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:v(v({},e),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:v(v({},r),{},{values:"1;0;1;1;0;1;"})}),i.push(s),i.push({tag:"path",attributes:v(v({},h),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:v(v({},r),{},{values:"1;0;0;0;0;1;"})}]}),t||i.push({tag:"path",attributes:v(v({},h),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:v(v({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},sa={hooks:function(){return{parseNodeAttributes:function(t,i){var h=i.getAttribute("data-fa-symbol"),e=h===null?!1:h===""?!0:h;return t.symbol=e,t}}}},oa=[I6,W4,$4,X4,G4,la,ta,ia,ea,ra,sa];p4(oa,{mixoutsTo:B});var e7=B.noAuto,va=B.config,r7=B.library,ca=B.dom,wa=B.parse,s7=B.findIconDefinition,o7=B.toHtml,na=B.icon,v7=B.layer,ga=B.text,da=B.counter;var q2=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=j({type:a});static \u0275inj=T({})}return a})();var ba=new A1("ngx-bootstrap-icons-module-configuration");var C1=class{constructor(l){this._icons=l}};var _2=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-flower1" viewBox="0 0 16 16">
  <path d="M6.174 1.184a2 2 0 0 1 3.652 0A2 2 0 0 1 12.99 3.01a2 2 0 0 1 1.826 3.164 2 2 0 0 1 0 3.652 2 2 0 0 1-1.826 3.164 2 2 0 0 1-3.164 1.826 2 2 0 0 1-3.652 0A2 2 0 0 1 3.01 12.99a2 2 0 0 1-1.826-3.164 2 2 0 0 1 0-3.652A2 2 0 0 1 3.01 3.01a2 2 0 0 1 3.164-1.826zM8 1a1 1 0 0 0-.998 1.03l.01.091c.012.077.029.176.054.296.049.241.122.542.213.887.182.688.428 1.513.676 2.314L8 5.762l.045-.144c.248-.8.494-1.626.676-2.314.091-.345.164-.646.213-.887a4.997 4.997 0 0 0 .064-.386L9 2a1 1 0 0 0-1-1zM2 9l.03-.002.091-.01a4.99 4.99 0 0 0 .296-.054c.241-.049.542-.122.887-.213a60.59 60.59 0 0 0 2.314-.676L5.762 8l-.144-.045a60.59 60.59 0 0 0-2.314-.676 16.705 16.705 0 0 0-.887-.213 4.99 4.99 0 0 0-.386-.064L2 7a1 1 0 1 0 0 2zm7 5-.002-.03a5.005 5.005 0 0 0-.064-.386 16.398 16.398 0 0 0-.213-.888 60.582 60.582 0 0 0-.676-2.314L8 10.238l-.045.144c-.248.8-.494 1.626-.676 2.314-.091.345-.164.646-.213.887a4.996 4.996 0 0 0-.064.386L7 14a1 1 0 1 0 2 0zm-5.696-2.134.025-.017a5.001 5.001 0 0 0 .303-.248c.184-.164.408-.377.661-.629A60.614 60.614 0 0 0 5.96 9.23l.103-.111-.147.033a60.88 60.88 0 0 0-2.343.572c-.344.093-.64.18-.874.258a5.063 5.063 0 0 0-.367.138l-.027.014a1 1 0 1 0 1 1.732zM4.5 14.062a1 1 0 0 0 1.366-.366l.014-.027c.01-.02.021-.048.036-.084a5.09 5.09 0 0 0 .102-.283c.078-.233.165-.53.258-.874a60.6 60.6 0 0 0 .572-2.343l.033-.147-.11.102a60.848 60.848 0 0 0-1.743 1.667 17.07 17.07 0 0 0-.629.66 5.06 5.06 0 0 0-.248.304l-.017.025a1 1 0 0 0 .366 1.366zm9.196-8.196a1 1 0 0 0-1-1.732l-.025.017a4.951 4.951 0 0 0-.303.248 16.69 16.69 0 0 0-.661.629A60.72 60.72 0 0 0 10.04 6.77l-.102.111.147-.033a60.6 60.6 0 0 0 2.342-.572c.345-.093.642-.18.875-.258a4.993 4.993 0 0 0 .367-.138.53.53 0 0 0 .027-.014zM11.5 1.938a1 1 0 0 0-1.366.366l-.014.027c-.01.02-.021.048-.036.084a5.09 5.09 0 0 0-.102.283c-.078.233-.165.53-.258.875a60.62 60.62 0 0 0-.572 2.342l-.033.147.11-.102a60.848 60.848 0 0 0 1.743-1.667c.252-.253.465-.477.629-.66a5.001 5.001 0 0 0 .248-.304l.017-.025a1 1 0 0 0-.366-1.366zM14 9a1 1 0 0 0 0-2l-.03.002a4.996 4.996 0 0 0-.386.064c-.242.049-.543.122-.888.213-.688.182-1.513.428-2.314.676L10.238 8l.144.045c.8.248 1.626.494 2.314.676.345.091.646.164.887.213a4.996 4.996 0 0 0 .386.064L14 9zM1.938 4.5a1 1 0 0 0 .393 1.38l.084.035c.072.03.166.064.283.103.233.078.53.165.874.258a60.88 60.88 0 0 0 2.343.572l.147.033-.103-.111a60.584 60.584 0 0 0-1.666-1.742 16.705 16.705 0 0 0-.66-.629 4.996 4.996 0 0 0-.304-.248l-.025-.017a1 1 0 0 0-1.366.366zm2.196-1.196.017.025a4.996 4.996 0 0 0 .248.303c.164.184.377.408.629.661A60.597 60.597 0 0 0 6.77 5.96l.111.102-.033-.147a60.602 60.602 0 0 0-.572-2.342c-.093-.345-.18-.642-.258-.875a5.006 5.006 0 0 0-.138-.367l-.014-.027a1 1 0 1 0-1.732 1zm9.928 8.196a1 1 0 0 0-.366-1.366l-.027-.014a5 5 0 0 0-.367-.138c-.233-.078-.53-.165-.875-.258a60.619 60.619 0 0 0-2.342-.572l-.147-.033.102.111a60.73 60.73 0 0 0 1.667 1.742c.253.252.477.465.66.629a4.946 4.946 0 0 0 .304.248l.025.017a1 1 0 0 0 1.366-.366zm-3.928 2.196a1 1 0 0 0 1.732-1l-.017-.025a5.065 5.065 0 0 0-.248-.303 16.705 16.705 0 0 0-.629-.661A60.462 60.462 0 0 0 9.23 10.04l-.111-.102.033.147a60.6 60.6 0 0 0 .572 2.342c.093.345.18.642.258.875a4.985 4.985 0 0 0 .138.367.575.575 0 0 0 .014.027zM8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
</svg>`,T2=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-flower2" viewBox="0 0 16 16">
  <path d="M8 16a4 4 0 0 0 4-4 4 4 0 0 0 0-8 4 4 0 0 0-8 0 4 4 0 1 0 0 8 4 4 0 0 0 4 4zm3-12c0 .073-.01.155-.03.247-.544.241-1.091.638-1.598 1.084A2.987 2.987 0 0 0 8 5c-.494 0-.96.12-1.372.331-.507-.446-1.054-.843-1.597-1.084A1.117 1.117 0 0 1 5 4a3 3 0 0 1 6 0zm-.812 6.052A2.99 2.99 0 0 0 11 8a2.99 2.99 0 0 0-.812-2.052c.215-.18.432-.346.647-.487C11.34 5.131 11.732 5 12 5a3 3 0 1 1 0 6c-.268 0-.66-.13-1.165-.461a6.833 6.833 0 0 1-.647-.487zm-3.56.617a3.001 3.001 0 0 0 2.744 0c.507.446 1.054.842 1.598 1.084.02.091.03.174.03.247a3 3 0 1 1-6 0c0-.073.01-.155.03-.247.544-.242 1.091-.638 1.598-1.084zm-.816-4.721A2.99 2.99 0 0 0 5 8c0 .794.308 1.516.812 2.052a6.83 6.83 0 0 1-.647.487C4.66 10.869 4.268 11 4 11a3 3 0 0 1 0-6c.268 0 .66.13 1.165.461.215.141.432.306.647.487zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
</svg>`;var R2=(()=>{class a{static pick(t,i){return{ngModule:a,providers:[{provide:C1,multi:!0,useValue:t},{provide:ba,useValue:i}]}}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=j({type:a}),a.\u0275inj=T({}),a})();var za={flower1:_2,flower2:T2},T0=class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=j({type:a,bootstrap:[C0]});static \u0275inj=T({providers:[F1(),Q1($0),X1($1())],imports:[W1,l5,a5,r0,V0,q2,R2.pick(za)]})};U1().bootstrapModule(T0,{}).catch(a=>console.error(a));
