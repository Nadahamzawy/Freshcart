import{c as u}from"./chunk-32RMYXYN.js";import{s as p,x as a}from"./chunk-H455QME5.js";import{R as c,X as l}from"./chunk-EFTTM5UD.js";var s=class extends Error{};s.prototype.name="InvalidTokenError";function d(r){return decodeURIComponent(atob(r).replace(/(.)/g,(t,o)=>{let e=o.charCodeAt(0).toString(16).toUpperCase();return e.length<2&&(e="0"+e),"%"+e}))}function h(r){let t=r.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return d(t)}catch{return atob(t)}}function f(r,t){if(typeof r!="string")throw new s("Invalid token specified: must be a string");t||(t={});let o=t.header===!0?0:1,e=r.split(".")[o];if(typeof e!="string")throw new s(`Invalid token specified: missing part #${o+1}`);let i;try{i=h(e)}catch(n){throw new s(`Invalid token specified: invalid base64 for part #${o+1} (${n.message})`)}try{return JSON.parse(i)}catch(n){throw new s(`Invalid token specified: invalid json for part #${o+1} (${n.message})`)}}var k=(()=>{let t=class t{constructor(){this.userData=null,this._HttpClient=l(p),this._Router=l(u)}setregisterform(e){return this._HttpClient.post(`${a.baseUrl}/api/v1/auth/signup`,e)}setloginform(e){return this._HttpClient.post(`${a.baseUrl}/api/v1/auth/signin`,e)}SaveUserData(){localStorage.getItem("userToken")!==null&&(this.userData=f(localStorage.getItem("userToken")),console.log(this.userData))}logOut(){localStorage.removeItem("userToken"),this.userData=null,this._Router.navigate(["/login"])}setEmailVerify(e){return this._HttpClient.post(`${a.baseUrl}/api/v1/auth/forgotPasswords`,e)}setCodeVerify(e){return this._HttpClient.post(`${a.baseUrl}/api/v1/auth/verifyResetCode`,e)}setresetpassword(e){return this._HttpClient.put(`${a.baseUrl}/api/v1/auth/resetPassword`,e)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();export{k as a};
