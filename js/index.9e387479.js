(()=>{document.querySelector(".block");const e=document.querySelector(".mobile-menu__open"),o=document.querySelector(".mobile-menu__close"),t=document.querySelector(".nav-menu"),n=document.querySelector(".main"),r=gsap.timeline({paused:!0});r.to(n,{duration:1,display:"none"}),r.fromTo(t,{width:"0"},{duration:3,width:"100%",display:"block"}),r.to(o,{duration:2,opacity:1}),e.addEventListener("click",(()=>{r.restart()})),o.addEventListener("click",(()=>{r.reverse()}))})();