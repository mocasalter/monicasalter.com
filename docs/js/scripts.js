!function(e){"use strict";e(".js-button-ripple").on("click",function(e){var t=e.target,n=t.getBoundingClientRect(),o=t.querySelector(".ripple");o||(o=document.createElement("span"),o.className="ripple",o.style.height=o.style.width=Math.max(n.width,n.height)+"px",t.appendChild(o)),o.classList.remove("show");var a=e.pageY-n.top-o.offsetHeight/2-document.body.scrollTop,i=e.pageX-n.left-o.offsetWidth/2-document.body.scrollLeft;o.style.top=a+"px",o.style.left=i+"px",o.classList.add("show")});var t=Snap("#crane"),n=t.select("#front_wing"),o=(t.select("#front_wing_image"),t.select("#back_wing")),a=t.select("#head_and_neck"),i=t.select("#head"),r={frontWing:[272.8,194.8],backWing:[257.9,120.5],head:[286.7,27.7],neck:[276.4,181]},c={look:12e3,neck:4e3,flap1:1e3,flap2:1500},u={neckLowered:700,neckPaused:2500,neckRaised:600},s={init:function(){l.controls()}},l={controls:function(){l.headNeckMotions(),l.wingMotions(),setInterval(function(){l.headNeckMotions()},c.look+c.neck),setInterval(function(){l.wingMotions()},8e3)},headNeckMotions:function(){setTimeout(function(){l.bendNeck(),l.tiltHead()},c.neck),setTimeout(function(){l.lookAround()},c.look)},wingMotions:function(){setTimeout(function(){l.flapWings(75)},c.flap1),setTimeout(function(){l.flapWings(100)},c.flap2)},lookAround:function(){i.animate({transform:"r"+[6,r.head]},900,mina.backout,function(){setTimeout(function(){i.animate({transform:"r"+[0,r.head]},500,mina.backout)},700)})},tiltHead:function(){setTimeout(function(){i.animate({transform:"r"+[-10,r.head]},u.neckLowered,mina.linear,function(){setTimeout(function(){i.animate({transform:"r"+[0,r.head]},500,mina.linear)},700)})},200)},bendNeck:function(){a.animate({transform:"r"+[20,r.neck]},u.neckLowered,mina.linear,function(){setTimeout(function(){a.animate({transform:"r"+[0,r.neck]},u.neckRaised,mina.linear)},u.neckPaused)})},flapWings:function(e){n.animate({transform:"r"+[-4,r.frontWing]},e+100,mina.easeout,function(){setTimeout(function(){n.animate({transform:"r"+[0,r.frontWing]},e+300,mina.backout)},e)}),o.animate({transform:"r"+[-3,r.backWing]},e+110,mina.easeout,function(){setTimeout(function(){o.animate({transform:"r"+[0,r.backWing]},e+300,mina.backout)},e)})}};e(document).ready(function(){s.init()})}(this.jQuery),function(e,t){"function"==typeof define&&define.amd?define([],function(){return t(e)}):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)}("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,function(e){"use strict";var t="querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype,n={ignore:"[data-scroll-ignore]",header:null,speed:500,offset:0,easing:"easeInOutCubic",customEasing:null,before:function(){},after:function(){}},o=function(){for(var e={},t=0,n=arguments.length,o=function(t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};n>t;t++){var a=arguments[t];o(a)}return e},a=function(t){return parseInt(e.getComputedStyle(t).height,10)},i=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,i="",r=n.charCodeAt(0);++a<o;){if(t=n.charCodeAt(a),0===t)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=t>=1&&31>=t||127==t||0===a&&t>=48&&57>=t||1===a&&t>=48&&57>=t&&45===r?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&57>=t||t>=65&&90>=t||t>=97&&122>=t?n.charAt(a):"\\"+n.charAt(a)}return"#"+i},r=function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=.5>t?2*t*t:-1+(4-2*t)*t),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=.5>t?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=.5>t?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(n=e.customEasing(t)),n||t},c=function(){return parseInt(e.getComputedStyle(document.documentElement).height,10)},u=function(e,t,n){var o=0;if(e.offsetParent)do o+=e.offsetTop,e=e.offsetParent;while(e);return o=Math.max(o-t-n,0)},s=function(e){return e?a(e)+e.offsetTop:0},l=function(t,n,o){o||(t.focus(),document.activeElement.id!==t.id&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},f=function(t){return!!("matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches)},d=function(a,d){var m,h,g,p,v,k,b,y={};y.cancelScroll=function(){cancelAnimationFrame(b)},y.animateScroll=function(t,a,i){var f=o(m||n,i||{}),d="[object Number]"===Object.prototype.toString.call(t),h=d||!t.tagName?null:t;if(d||h){var g=e.pageYOffset;f.header&&!p&&(p=document.querySelector(f.header)),v||(v=s(p));var k,b,w,S=d?t:u(h,v,parseInt("function"==typeof f.offset?f.offset():f.offset,10)),I=S-g,T=c(),A=0,E=function(n,o){var i=e.pageYOffset;return n==o||i==o||(o>g&&e.innerHeight+i)>=T?(y.cancelScroll(),l(t,o,d),f.after(t,a),k=null,!0):void 0},O=function(t){k||(k=t),A+=t-k,b=A/parseInt(f.speed,10),b=b>1?1:b,w=g+I*r(f,b),e.scrollTo(0,Math.floor(w)),E(w,S)||(e.requestAnimationFrame(O),k=t)};0===e.pageYOffset&&e.scrollTo(0,0),f.before(t,a),y.cancelScroll(),e.requestAnimationFrame(O)}};var w=function(e){h&&(h.id=h.getAttribute("data-scroll-id"),y.animateScroll(h,g),h=null,g=null)},S=function(t){if(!f(m)&&0===t.button&&!t.metaKey&&!t.ctrlKey&&(g=t.target.closest(a),g&&"a"===g.tagName.toLowerCase()&&!t.target.closest(m.ignore)&&g.hostname===e.location.hostname&&g.pathname===e.location.pathname&&/#/.test(g.href))){var n;try{n=i(decodeURIComponent(g.hash))}catch(e){n=i(g.hash)}if("#"===n){t.preventDefault(),h=document.body;var o=h.id?h.id:"smooth-scroll-top";return h.setAttribute("data-scroll-id",o),h.id="",void(e.location.hash.substring(1)===o?w():e.location.hash=o)}h=document.querySelector(n),h&&(h.setAttribute("data-scroll-id",h.id),h.id="",g.hash===e.location.hash&&(t.preventDefault(),w()))}},I=function(e){k||(k=setTimeout(function(){k=null,v=s(p)},66))};return y.destroy=function(){m&&(document.removeEventListener("click",S,!1),e.removeEventListener("resize",I,!1),y.cancelScroll(),m=null,h=null,g=null,p=null,v=null,k=null,b=null)},y.init=function(a){t&&(y.destroy(),m=o(n,a||{}),p=m.header?document.querySelector(m.header):null,v=s(p),document.addEventListener("click",S,!1),e.addEventListener("hashchange",w,!1),p&&e.addEventListener("resize",I,!1))},y.init(d),y};return d});