window.addEventListener("load",(function(){function e(e){let t=e||document.querySelectorAll("[data-digits-counter]");t&&t.forEach((e=>{!function(e){let t=null;const n=1e3,o=parseInt(e.innerHTML),r=0,i=c=>{t||(t=c);const l=Math.min((c-t)/n,1);e.innerHTML=Math.floor(l*(r+o)),l<1&&window.requestAnimationFrame(i)};window.requestAnimationFrame(i)}(e)}))}let t=new IntersectionObserver(((t,n)=>{t.forEach((t=>{if(t.isIntersecting){const n=t.target.querySelectorAll("[data-digits-counter]");n.length&&e(n)}}))}),{threshold:.3}),n=document.querySelectorAll(".page-count");n.length&&n.forEach((e=>{t.observe(e)}))}));
//# sourceMappingURL=index.8189a925.js.map