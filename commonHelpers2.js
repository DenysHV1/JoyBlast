/* empty css                      */import{S as l}from"./assets/vendor-0619e110.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const c=()=>{const t=document.querySelector(".burger_menu-js"),r=document.querySelector(".mobile-nav-js"),n=document.querySelectorAll(".mobile-menu-item-js");t.addEventListener("click",()=>{r.classList.toggle("is-open")}),n.forEach(s=>{s.addEventListener("click",()=>{r.classList.remove("is-open")})})},a=()=>{const t=document.querySelectorAll(".faq-question-button-js");t.forEach(r=>{r.addEventListener("click",()=>{const n=r.nextElementSibling.classList.contains("open");t.forEach(s=>{[...s.children].forEach(e=>{e.nodeName==="SPAN"&&(e.style.backgroundColor="transparent",e.style.borderColor="black",[...e.children].forEach(o=>{o.style.transform="rotate(0deg)",o.style.stroke="black"}))})}),t.forEach(s=>{s.nextElementSibling.classList.remove("open")}),n||(r.nextElementSibling.classList.add("open"),[...r.children].forEach(s=>{s.nodeName==="SPAN"&&(s.style.backgroundColor="#723243",s.style.borderColor="transparent",[...s.children].forEach(e=>{e.style.transform="rotate(90deg)",e.style.stroke="white"}))}))})})},u=()=>{let t=null;const r=()=>{window.innerWidth<1200?t||(t=new l(".swiper-gallery",{slidesPerView:1,slidesPerGroup:1,centeredSlides:!0,loop:!0,grabCursor:!0,spaceBetween:10,speed:800,simulateTouch:!0,touchRatio:1,mousewheel:{sensitivity:.5},keyboard:{enabled:!0,onlyInViewport:!0},pagination:{el:".swiper-pagination-gallery",type:"bullets",clickable:!0}})):t&&(t.destroy(!0,!0),t=null)};r(),window.addEventListener("resize",r)},d=()=>{let t=null;const r=()=>{window.innerWidth<1200?t||(t=new l(".swiper-reviews",{slidesPerView:1,slidesPerGroup:1,centeredSlides:!0,loop:!0,grabCursor:!0,spaceBetween:10,speed:800,simulateTouch:!0,touchRatio:1,mousewheel:{sensitivity:.5},keyboard:{enabled:!0,onlyInViewport:!0},pagination:{el:".swiper-pagination-reviews",type:"bullets",clickable:!0}})):t&&(t.destroy(!0,!0),t=null)};r(),window.addEventListener("resize",r)},p=()=>{const t=document.querySelector(".scroll-up");window.addEventListener("scroll",()=>{t.classList.toggle("is-open-scroll",window.scrollY>500)})},y=()=>{const t=document.querySelector(".cookie-policy-button1-js"),r=document.querySelector(".cookie-policy-button2-js"),n=document.querySelector(".cookie-policy");if(JSON.parse(localStorage.getItem("status"))){n.style.display="none";return}t.addEventListener("click",()=>{n.style.display="none",localStorage.setItem("status",JSON.stringify(!0))}),r.addEventListener("click",()=>{n.style.display="none",localStorage.setItem("status",JSON.stringify(!1))})};c();a();u();d();y();p();
//# sourceMappingURL=commonHelpers2.js.map
