const miJuegoModulo=(()=>{"use strict";let e=[],t=[],a=["C","D","H","S"],l=["A","J","Q","K"],d=document.querySelector("#btnPedir"),r=document.querySelector("#btnDetener"),n=document.querySelector("#btnNuevo"),i=document.querySelectorAll(".divCartas"),s=document.querySelectorAll("small"),o=(a=2)=>{e=c(),t=[];for(let l=0;l<a;l++)t.push(0),s[l].innerText=0,i[l].innerHTML="";d.disabled=!1,r.disabled=!0},c=()=>{e=[];for(let t=2;t<=10;t++)for(let d of a)e.push(t+d);for(let r of a)for(let n of l)e.push(n+r);return _.shuffle(e)},u=()=>{if(0===e.length)throw"No hay cartas en el deck";return e.pop()},$=e=>{let t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t},g=(e,a)=>(t[a]=t[a]+$(e),s[a].innerText=t[a],t[a]),b=(e,t)=>{let a=document.createElement("img");a.src=`../img/cartas/${e}.png`,a.classList.add("carta"),i[t].append(a)},h=()=>{let[e,a]=t;setTimeout(()=>{a===e?alert("Empate.... nadie gana :( ... otra vez!"):e>21?alert("La computadora gana!"):a>21?alert("Felicidades, haz ganado!"):21===e&&21!==a?alert("BlackJack!... Felicidades, haz ganado"):alert("La computadora gana!")},300)},f=e=>{let a=0;do{let l=u();a=g(l,t.length-1),b(l,t.length-1)}while(a<e&&e<=21);h()};return d.addEventListener("click",()=>{let e=u(),t=g(e,0);b(e,0),t>21?(r.disabled=!0,d.disabled=!0,f(t)):21===t?(r.disabled=!0,d.disabled=!0,f(t)):(r.disabled=!1,d.disabled=!1)}),r.addEventListener("click",()=>{d.disabled=!0,r.disabled=!0,f(t[0])}),n.addEventListener("click",()=>{o()}),{nuevoJuego:o}})();