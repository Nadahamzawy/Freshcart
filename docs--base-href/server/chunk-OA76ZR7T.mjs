import './polyfills.server.mjs';
import{a as e}from"./chunk-EDOPUDTE.mjs";import{x as c}from"./chunk-YJATQK5N.mjs";import{R as o,X as n}from"./chunk-Z7GZ3Q2P.mjs";var u=(()=>{let t=class t{constructor(){this._HttpClient=n(c)}getAllproduct(){return this._HttpClient.get(`${e.baseUrl}/api/v1/products`)}getSpecificProduct(i){return this._HttpClient.get(`${e.baseUrl}/api/v1/products/${i}`)}};t.\u0275fac=function(p){return new(p||t)},t.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();export{u as a};
