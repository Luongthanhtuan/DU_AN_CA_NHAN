(self.webpackChunk=self.webpackChunk||[]).push([[7062],{810412:(t,e,n)=>{"use strict";n(816498)},816498:()=>{!function(){let t;const e=document.querySelector(".rtbLoader_logo"),n=document.createElement("canvas"),o=L("361.576097 26 297.379942 26 373.532672 98.2291134 233.885178 26 169.689023 26 246.839857 124.314405 106.194259 26 42 26 119.216279 155.036325 42 494 106.194259 494 246.839857 137.686236 169.689023 494 233.885178 494 373.532672 111.600944 297.379942 494 361.576097 494 502 80.0761719"),i=L("361.576097 26 297.379942 26 374.080065 259.46232 233.885178 26 169.689023 26 247.38725 285.547611 106.194259 26 42 26 119.763672 316.269531 42 494 106.194259 494 247.38725 298.919442 169.689023 494 233.885178 494 374.080065 272.834151 297.379942 494 361.576097 494 502 241.309379"),r=L("321.576097 26 257.379942 26 373.942828 374.240832 193.885178 26 129.689023 26 247.250013 400.326123 66.1942589 26 2 26 119.626435 431.048043 2 494 66.1942589 494 247.250013 413.697954 129.689023 494 193.885178 494 373.942828 387.612663 257.379942 494 321.576097 494 502 356.087891"),a=L("520 26 455.874888 26 254.034953 406.018961 392.450391 26 328.325279 26 127.482343 432.104252 264.900781 26 200.777563 26 0 462.826172 200.777563 494 264.900781 494 127.482343 445.476083 328.325279 494 392.450391 494 254.034953 419.390792 455.874888 494 520 494 382.51619 387.866019"),s=(l=.8,u=0,c=.2,d=1,function(t){return w(function(t,e,n){let o=t;for(let i=0;i<4;++i){const i=v(o,e,n);if(0===i)return o;o-=(w(o,e,n)-t)/i}return o}(t,l,c),u,d)});var l,u,c,d;t=function(t,e,n,o,i,r,a){let s,l,u,c,d,f,p="init",y=!1,h=0,m=!1;const g=t.getContext("2d"),b=window.devicePixelRatio||1;g.mozImageSmoothingEnabled=!1,g.imageSmoothingEnabled=!1;const L=r/o,w=a/i;function v(){if(e.length<2)throw new Error("Wtf, just render shape once and do not call this. Or define more shapes.");if("stop"!==p&&"pause"!==p){if("init"===p){g.clearRect(0,0,o,i),h=0,u=e[h];const r=u.points;g.beginPath(),g.fillStyle=n;for(var t=0;t<r.length;t++){const e=r[t];0===t?g.moveTo(e.x,e.y):g.lineTo(e.x,e.y)}g.fill(),T()}else if("delay"===p){(r=Date.now())>=c&&E()}else if("animate"===p){if(g.clearRect(0,0,o,i),l.points.length!==u.points.length)throw new Error("Invalid shapes config, points count should be the same");var r=Date.now();g.beginPath(),g.fillStyle=n;for(t=0;t<u.points.length;t++){const e=u.points[t],n=l.points[t];var a,y;if(r>=f)a=e.x,y=e.y;else{let t=(r-d)/u.duration;t=u.easing(t),a=x(n.x,e.x,t),y=x(n.y,e.y,t)}0===t?g.moveTo(a,y):g.lineTo(a,y)}g.fill(),r>=f&&T()}s=requestAnimationFrame(v)}}function T(){h++,l=u,u=e[h],u||(h=0,u=e[0]),m&&console.info("Morph step",'from "'+l.id+'" to "'+u.id+'". Delay: '+u.delay),y?p="pause":u.delay?(p="delay",c=Date.now()+u.delay):E()}function E(){p="animate",d=Date.now(),f=d+u.duration}function x(t,e,n){return t+(e-t)*n}return t.width=L*o*b,t.height=w*i*b,t.style.width=L*o+"px",t.style.height=w*i+"px",g.scale(L*b,w*b),{start:function(){p="init",y=!1,v()},stop:function(){y=!1,p="stop",cancelAnimationFrame(s)},pause:function(){y=!0},resume:function(){y=!1,"pause"===p&&(E(),v())},setColor:function(t){n=t},showLogs:function(t){m=t}}}(n,[{id:"top-start",points:o,duration:400,delay:400,easing:function(t){return s(t)}},{id:"bottom",points:r,duration:400,delay:300,easing:function(t){return s(t)}},{id:"bottom-left",points:a,duration:400,delay:300,easing:function(t){return s(t)}},{id:"top",points:o,duration:400,delay:300,easing:function(t){return s(t)}},{id:"half",points:i,duration:400,delay:300,easing:function(t){return s(t)}},{id:"bottom",points:r,duration:400,delay:400,easing:function(t){return s(t)}}],"#E1E0E7",520,520,196,196),e.appendChild(n),e.removeChild(e.querySelector("svg")),t.start();const f=document.getElementById("rtb-loader"),p=f.querySelector(".rtbLoader_error"),y=p.querySelector(".rtbLoader_error_description"),h=p.querySelector(".rtbLoader_error_timeout");let m=!1;const g={};function b(){h.innerHTML||y.innerHTML?(p.style.display="block",t.pause()):(p.style.display="none",t.resume())}function L(t){const e=t.split(" "),n=[];for(let t=0;t<e.length;t+=2)n.push({x:parseFloat(e[t]),y:parseFloat(e[t+1])});return n}function w(t,e,n){return((T(e,n)*t+E(e,n))*t+x(e))*t}function v(t,e,n){return 3*T(e,n)*t*t+2*E(e,n)*t+x(e)}function T(t,e){return 1-3*e+3*t}function E(t,e){return 3*e-6*t}function x(t){return 3*t}g.shapesMorphAnimation=t,g.setErrorHTML=function(t){y.innerHTML=t,b()},g.setTimeoutHTML=function(t){h.innerHTML=t,b()},g.attachClick=function(t,e){const n=document.querySelector(t);n.addEventListener("click",(function t(){n.removeEventListener("click",t),e()}))},g.setVisibility=function(e){e?m&&(m=!1,document.body.classList.add("app-loading"),f.style.display="block",t.start()):m||(m=!0,document.body.classList.remove("app-loading"),f.style.display="none",t.stop(),g.setErrorHTML(""),g.setTimeoutHTML(""))},window.rtbLoader=g}()}},t=>{var e;e=810412,t(t.s=e)}]);
//# sourceMappingURL=https://miro.com/app/static/legacyPolyfills.4b2c856625358fa8.js.map