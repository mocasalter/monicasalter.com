!function(n){"use strict";n(".js-button-ripple").on("click",function(n){var e=n.target,t=e.getBoundingClientRect(),o=e.querySelector(".ripple");o||(o=document.createElement("span"),o.className="ripple",o.style.height=o.style.width=Math.max(t.width,t.height)+"px",e.appendChild(o)),o.classList.remove("show");var i=n.pageY-t.top-o.offsetHeight/2-document.body.scrollTop,a=n.pageX-t.left-o.offsetWidth/2-document.body.scrollLeft;return o.style.top=i+"px",o.style.left=a+"px",o.classList.add("show"),!1});var e=Snap("#crane"),t=e.select("#front_wing"),o=e.select("#back_wing"),i=e.select("#head_and_neck"),a=e.select("#head"),c={frontWing:[272.8,194.8],backWing:[257.9,120.5],head:[286.7,27.7],neck:[276.4,181]},r={look:12e3,neck:4e3,flap1:1e3,flap2:1500},s={neckLowered:700,neckPaused:2500,neckRaised:600},u={init:function(){f.controls()}},f={controls:function(){f.headNeckMotions(),f.wingMotions(),setInterval(function(){f.headNeckMotions()},r.look+r.neck),setInterval(function(){f.wingMotions()},8e3)},headNeckMotions:function(){setTimeout(function(){f.bendNeck(),f.tiltHead()},r.neck),setTimeout(function(){f.lookAround()},r.look)},wingMotions:function(){setTimeout(function(){f.flapWings(75)},r.flap1),setTimeout(function(){f.flapWings(100)},r.flap2)},lookAround:function(){a.animate({transform:"r"+[6,c.head]},900,mina.backout,function(){setTimeout(function(){a.animate({transform:"r"+[0,c.head]},500,mina.backout)},700)})},tiltHead:function(){setTimeout(function(){a.animate({transform:"r"+[-10,c.head]},s.neckLowered,mina.linear,function(){setTimeout(function(){a.animate({transform:"r"+[0,c.head]},500,mina.linear)},700)})},200)},bendNeck:function(){i.animate({transform:"r"+[20,c.neck]},s.neckLowered,mina.linear,function(){setTimeout(function(){i.animate({transform:"r"+[0,c.neck]},s.neckRaised,mina.linear)},s.neckPaused)})},flapWings:function(n){t.animate({transform:"r"+[-4,c.frontWing]},n+100,mina.easeout,function(){setTimeout(function(){t.animate({transform:"r"+[0,c.frontWing]},n+300,mina.backout)},n)}),o.animate({transform:"r"+[-3,c.backWing]},n+110,mina.easeout,function(){setTimeout(function(){o.animate({transform:"r"+[0,c.backWing]},n+300,mina.backout)},n)})}};n(document).ready(function(){u.init()})}(this.jQuery);