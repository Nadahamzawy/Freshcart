import{a as v}from"./chunk-AHP4XESX.js";import{a as h}from"./chunk-32RMYXYN.js";import"./chunk-6AUBK3KX.js";import"./chunk-H455QME5.js";import{Cb as d,Db as f,Jb as x,Ma as c,X as a,Xa as l,_ as p,ib as g,jb as m,kb as u,lb as s,mb as r}from"./chunk-EFTTM5UD.js";import"./chunk-CWTPBX7D.js";function b(t,e){if(t&1&&(s(0,"div",3)(1,"div",4)(2,"h2",5),d(3),r()()()),t&2){let y=e.$implicit;c(3),f(y.name)}}var A=(()=>{let e=class e{constructor(){this._CategoriesService=a(v),this._ActivatedRoute=a(h),this.id="",this.getSpecificCategory=l([])}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:o=>{console.log(o.get("id"));let i=o.get("id");this._CategoriesService.getSpecificSub(i).subscribe({next:n=>{console.log(n.data),this.getSpecificCategory.set(n.data)}})}})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=p({type:e,selectors:[["app-subcategory"]],standalone:!0,features:[x],decls:6,vars:0,consts:[[1,"w-75","mx-auto","p-3","my-5"],[1,"row","g-3"],[1,"text-main","text-center"],[1,"col-md-4"],[1,"subcategory-card"],[1,"text-center"]],template:function(i,n){i&1&&(s(0,"section",0)(1,"div",1)(2,"h1",2),d(3,"Subcategory :"),r(),m(4,b,4,1,"div",3,g),r()()),i&2&&(c(4),u(n.getSpecificCategory()))},styles:[".subcategory-card[_ngcontent-%COMP%]{width:100%;height:100px;border:1px solid #ddd;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;transition:box-shadow .5s}.subcategory-card[_ngcontent-%COMP%]:hover{box-shadow:0 0 10px #11bd1168}"]});let t=e;return t})();export{A as SubcategoryComponent};
