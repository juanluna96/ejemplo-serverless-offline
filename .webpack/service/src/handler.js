(()=>{"use strict";var e={996:e=>{e.exports.handler=async e=>(await new Promise((e=>setTimeout(e,1e3))),console.log("Old log message"),{statusCode:200,body:JSON.stringify({message:"Go Serverless v1.0! Your function executed successfully!",input:e},null,2)})}},s={},r=function r(o){var t=s[o];if(void 0!==t)return t.exports;var u=s[o]={exports:{}};return e[o](u,u.exports,r),u.exports}(996),o=exports;for(var t in r)o[t]=r[t];r.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();