import './polyfills.server.mjs';
import{a as b}from"./chunk-RYS6HWI2.mjs";import"./chunk-EDOPUDTE.mjs";import{e as _}from"./chunk-FG3AUJKH.mjs";import"./chunk-V443I64Y.mjs";import"./chunk-YJATQK5N.mjs";import{$ as p,Fb as f,Gb as h,La as l,Mb as x,Ob as y,Pa as i,X as d,_a as g,gb as c,lb as m,mb as u,nb as v,ob as r,pb as s,qb as C}from"./chunk-Z7GZ3Q2P.mjs";import"./chunk-VVCT4QZE.mjs";var S=e=>["/subcategory",e];function k(e,t){if(e&1&&(r(0,"div",2)(1,"div",3),C(2,"img",4),r(3,"h3",5),f(4),s()()()),e&2){let a=t.$implicit;i(),c("routerLink",y(3,S,a._id)),i(),c("src",a.image,l),i(2),h(a.name)}}var I=(()=>{let t=class t{constructor(){this._CategoriesService=d(b),this.AllCategories=g([])}ngOnInit(){this._CategoriesService.getAllcategories().subscribe({next:n=>{console.log(n.data),this.AllCategories.set(n.data)}})}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=p({type:t,selectors:[["app-categories"]],standalone:!0,features:[x],decls:4,vars:0,consts:[[1,"my-5","w-75","mx-auto","p-3"],[1,"row","g-4"],[1,"col-md-4"],[1,"category-card","my-3",3,"routerLink"],["height","300px","alt","",1,"w-100",3,"src"],[1,"text-main","text-center","p-3"]],template:function(o,w){o&1&&(r(0,"section",0)(1,"div",1),u(2,k,5,5,"div",2,m),s()()),o&2&&(i(2),v(w.AllCategories()))},dependencies:[_],styles:[".category-card[_ngcontent-%COMP%]{box-shadow:0 0 1px #000;transition:box-shadow .5s ease-in-out}.category-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;background-position:center;background-size:contain}.category-card[_ngcontent-%COMP%]:hover{box-shadow:0 0 10px #11bd1168}"]});let e=t;return e})();export{I as CategoriesComponent};
