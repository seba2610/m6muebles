!function(){var e=function(e){for(var t=function(e){for(var t=e.childNodes,i=t.length,n=[],e,r,a,o,l,d=0;i>d;d++)if(e=t[d],1===e.nodeType){r=e.children,o=e.getAttribute("data-size").split("x"),l={src:e.getAttribute("href"),w:parseInt(o[0],10),h:parseInt(o[1],10),author:e.getAttribute("data-author")},l.el=e,r.length>0&&(l.msrc=r[0].getAttribute("src"),r.length>1&&(l.title=r[1].innerHTML));var s=e.getAttribute("data-med");s&&(o=e.getAttribute("data-med-size").split("x"),l.m={src:s,w:parseInt(o[0],10),h:parseInt(o[1],10)}),l.o={src:l.src,w:l.w,h:l.h},n.push(l)}return n},i=function u(e,t){return e&&(t(e)?e:u(e.parentNode,t))},n=function(e){e=e||window.event,e.preventDefault?e.preventDefault():e.returnValue=!1;var t=e.target||e.srcElement,n=i(t,function(e){return"A"===e.tagName});if(n){for(var r=n.parentNode,o=n.parentNode.childNodes,l=o.length,d=0,s,u=0;l>u;u++)if(1===o[u].nodeType){if(o[u]===n){s=d;break}d++}return s>=0&&a(s,r),!1}},r=function(){var e=window.location.hash.substring(1),t={};if(e.length<5)return t;for(var i=e.split("&"),n=0;n<i.length;n++)if(i[n]){var r=i[n].split("=");r.length<2||(t[r[0]]=r[1])}return t.gid&&(t.gid=parseInt(t.gid,10)),t},a=function(e,i,n,r){var a=document.querySelectorAll(".pswp")[0],o,l,d;if(d=t(i),l={galleryUID:i.getAttribute("data-pswp-uid"),getThumbBoundsFn:function(e){var t=d[e].el.children[0],i=window.pageYOffset||document.documentElement.scrollTop,n=t.getBoundingClientRect();return{x:n.left,y:n.top+i,w:n.width}},addCaptionHTMLFn:function(e,t,i){return e.title?(t.children[0].innerHTML=e.title+"<br/><small>Photo: "+e.author+"</small>",!0):(t.children[0].innerText="",!1)}},r)if(l.galleryPIDs){for(var s=0;s<d.length;s++)if(d[s].pid==e){l.index=s;break}}else l.index=parseInt(e,10)-1;else l.index=parseInt(e,10);if(!isNaN(l.index)){for(var u=document.getElementsByName("gallery-style"),c=0,p=u.length;p>c;c++)if(u[c].checked){"radio-all-controls"==u[c].id||"radio-minimal-black"==u[c].id&&(l.mainClass="pswp--minimal--dark",l.barsSize={top:0,bottom:0},l.captionEl=!1,l.fullscreenEl=!1,l.shareEl=!1,l.bgOpacity=.85,l.tapToClose=!0,l.tapToToggleControls=!1);break}n&&(l.showAnimationDuration=0),o=new PhotoSwipe(a,PhotoSwipeUI_Default,d,l);var h,f=!1,g=!0,w;o.listen("beforeResize",function(){var e=window.devicePixelRatio?window.devicePixelRatio:1;e=Math.min(e,2.5),h=o.viewportSize.x*e,h>=1200||!o.likelyTouchDevice&&h>800||screen.width>1200?f||(f=!0,w=!0):f&&(f=!1,w=!0),w&&!g&&o.invalidateCurrItems(),g&&(g=!1),w=!1}),o.listen("gettingData",function(e,t){f?(t.src=t.o.src,t.w=t.o.w,t.h=t.o.h):(t.src=t.m.src,t.w=t.m.w,t.h=t.m.h)}),o.init()}},o=document.querySelectorAll(e),l=0,d=o.length;d>l;l++)o[l].setAttribute("data-pswp-uid",l+1),o[l].onclick=n;var s=r();s.pid&&s.gid&&a(s.pid,o[s.gid-1],!0,!0)};e(".product-gallery")}(),$(document).ready(function(){$(".product-gallery").slick({autoplay:!0,dots:!1,infinite:!0,speed:3e3,adaptiveHeight:!1,arrows:!1,fade:!0})});