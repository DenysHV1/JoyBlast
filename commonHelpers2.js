/* empty css                      */import{S as i}from"./assets/vendor-0619e110.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const c=()=>{const t=document.querySelector(".burger_menu-js"),r=document.querySelector(".mobile-nav-js"),s=document.querySelectorAll(".mobile-menu-item-js");t.addEventListener("click",()=>{r.classList.toggle("is-open")}),s.forEach(n=>{n.addEventListener("click",()=>{r.classList.remove("is-open")})})},a=()=>{const t=document.querySelectorAll(".faq-question-button-js");t.forEach(r=>{r.addEventListener("click",()=>{const s=r.nextElementSibling.classList.contains("open");t.forEach(n=>{[...n.children].forEach(e=>{e.nodeName==="SPAN"&&(e.style.backgroundColor="transparent",e.style.borderColor="black",[...e.children].forEach(o=>{o.style.transform="rotate(0deg)",o.style.stroke="black"}))})}),t.forEach(n=>{n.nextElementSibling.classList.remove("open")}),s||(r.nextElementSibling.classList.add("open"),[...r.children].forEach(n=>{n.nodeName==="SPAN"&&(n.style.backgroundColor="#723243",n.style.borderColor="transparent",[...n.children].forEach(e=>{e.style.transform="rotate(90deg)",e.style.stroke="white"}))}))})})},d=()=>{let t=null;const r=()=>{window.innerWidth<1200?t||(t=new i(".swiper",{slidesPerView:1,slidesPerGroup:1,centeredSlides:!0,loop:!0,grabCursor:!0,spaceBetween:10,speed:800,simulateTouch:!0,touchRatio:1,mousewheel:{sensitivity:.5},keyboard:{enabled:!0,onlyInViewport:!0},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}})):t&&(t.destroy(!0,!0),t=null)};r(),window.addEventListener("resize",r)},u=()=>{const t=document.querySelector(".scroll-up");window.addEventListener("scroll",()=>{t.classList.toggle("is-open-scroll",window.scrollY>500)})};c();a();d();u();
//# sourceMappingURL=commonHelpers2.js.map
