import{a as F,b as M,c as O}from"./chunk-MDP3TP4N.js";import{a as A}from"./chunk-LT6UCBYE.js";import{a as I}from"./chunk-32RMYXYN.js";import{l as R}from"./chunk-XF2Y3HXU.js";import{a as k}from"./chunk-SLTK32QX.js";import"./chunk-6AUBK3KX.js";import"./chunk-H455QME5.js";import{Cb as c,Db as m,Eb as E,Ia as P,Jb as w,Kb as y,Ma as a,X as l,_ as g,bb as p,db as v,hb as f,ia as S,ib as T,ja as h,jb as x,kb as C,lb as o,mb as r,nb as _,qb as b,ub as D,vb as d}from"./chunk-EFTTM5UD.js";import"./chunk-CWTPBX7D.js";function V(t,n){return this.detailsProduct._id}var $=()=>[1,2,3,4,5];function j(t,n){if(t&1&&(o(0,"div"),_(1,"img",10),r()),t&2){let e=d().$implicit,s=d(2);a(),v("src",e,P)("alt",s.detailsProduct.title)}}function z(t,n){t&1&&p(0,j,2,2,"ng-template",3)}function B(t,n){t&1&&(o(0,"span"),_(1,"i",11),r())}function G(t,n){t&1&&_(0,"i",8)}function N(t,n){if(t&1){let e=b();o(0,"section")(1,"div",0)(2,"div",1)(3,"div")(4,"owl-carousel-o",2),x(5,z,1,0,null,3,V,!0),r()()(),o(7,"div",4)(8,"div")(9,"h2"),c(10),r(),o(11,"p",5),c(12),r(),o(13,"h3",6),c(14),r(),o(15,"div",7)(16,"span"),c(17),r(),o(18,"div"),x(19,B,2,0,"span",null,T),p(21,G,1,0,"i",8),o(22,"span",5),c(23),r()()(),o(24,"button",9),D("click",function(){S(e);let i=d();return h(i.addcart(i.detailsProduct.id))}),c(25," Add To Cart + "),r()()()()()}if(t&2){let e=d();a(4),v("options",e.customOptions),a(),C(e.detailsProduct.images),a(5),m(e.detailsProduct.title),a(2),m(e.detailsProduct.description),a(2),m(e.detailsProduct.category.name),a(3),E("",e.detailsProduct.price," EGP"),a(2),C(y(7,$).slice(0,e.detailsProduct.ratingsAverage)),a(2),f(21,e.detailsProduct.ratingsAverage%1!==0?21:-1),a(2),m(e.detailsProduct.ratingsAverage)}}var Y=(()=>{let n=class n{constructor(){this.customOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!1,navSpeed:700,navText:["",""],autoplay:!0,responsive:{0:{items:1},400:{items:2},740:{items:3},940:{items:4}},nav:!0},this._ActivatedRoute=l(I),this._ProductsService=l(A),this._CartService=l(k),this._ToastrService=l(R),this.detailsProduct=null}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:s=>{let i=s.get("id");this._ProductsService.getSpecificProduct(i).subscribe({next:u=>{console.log(u.data),this.detailsProduct=u.data}})}})}addcart(s){this._CartService.addProductToCart(s).subscribe({next:i=>{console.log(i),this._ToastrService.success(i.message,"FreshCart"),this._CartService.CartNumber.set(i.numOfCartItems)}})}};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=g({type:n,selectors:[["app-details"]],standalone:!0,features:[w],decls:1,vars:1,consts:[[1,"row","align-items-center"],[1,"col-md-3"],[3,"options"],["carouselSlide",""],[1,"col-md-9"],[1,"text-muted"],[1,"h6"],[1,"d-flex","justify-content-between","align-items-center"],[1,"fa-solid","fa-star-half-stroke","rating-color"],[1,"btn-main","w-100","mx-auto","btn","d-block",3,"click"],[1,"w-100",3,"src","alt"],[1,"fas","fa-star","rating-color"]],template:function(i,u){i&1&&p(0,N,26,8,"section"),i&2&&f(0,u.detailsProduct?0:-1)},dependencies:[O,M,F]});let t=n;return t})();export{Y as DetailsComponent};
