import"./assets/vendor-db7463ae.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const s={searchForm:document.querySelector("form"),searchInput:document.querySelector("input"),searchButton:document.querySelector("button")};s.searchForm.addEventListener("submit",o=>{if(o.preventDefault(),s.searchInput.value==="")return;const r=s.searchInput.value;u(r)});function u(o){const n="https://pixabay.com/api/"+"/api/",e={headers:{key:"42312276-5bc23f4af127c6565aecd0d27",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}};return fetch(n,e).then(t=>console.log(t))}
//# sourceMappingURL=commonHelpers.js.map