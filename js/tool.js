(function(){window.sys={};var a=navigator.userAgent.toLowerCase();var b;(b=a.match(/msie ([\d.]+)/))?sys.ie=b[1]:(b=a.match(/firefox\/([\d.]+)/))?sys.firefox=b[1]:(b=a.match(/chrome\/([\d.]+)/))?sys.chrome=b[1]:(b=a.match(/opera\/.*version\/([\d.]+)/))?sys.opera=b[1]:(b=a.match(/version\/([\d.]+).*safari/))?sys.safari=b[1]:0;if(/webkit/.test(a)){sys.webkit=a.match(/webkit\/([\d.]+)/)[1]}})();function addDomLoaded(a){var b=false;var d=null;function c(){if(d){clearInterval(d)}if(b){return}b=true;a()}if((sys.opera&&sys.opera<9)||(sys.firefox&&sys.firefox<3)||(sys.webkit&&sys.webkit<525)){d=setInterval(function(){if(document&&document.getElementById&&document.getElementsByTagName&&document.body){c()}},1)}else{if(document.addEventListener){addEvent(document,"DOMContentLoaded",function(){a();removeEvent(document,"DOMContentLoaded",arguments.callee)})}else{if(sys.ie&&sys.ie<9){var d=null;d=setInterval(function(){try{document.documentElement.doScroll("left");c()}catch(f){}},1)}}}}function addEvent(c,b,a){if(typeof c.addEventListener!="undefined"){c.addEventListener(b,a,false)}else{if(!c.events){c.events={}}if(!c.events[b]){c.events[b]=[];if(c["on"+b]){c.events[b][0]=a}}else{if(addEvent.equal(c.events[b],a)){return false}}c.events[b][addEvent.ID++]=a;c["on"+b]=addEvent.exec}}addEvent.ID=1;addEvent.exec=function(b){var c=b||addEvent.fixEvent(window.event);var d=this.events[c.type];for(var a in d){d[a].call(this,c)}};addEvent.equal=function(c,b){for(var a in c){if(c[a]==b){return true}}return false};addEvent.fixEvent=function(a){a.preventDefault=addEvent.fixEvent.preventDefault;a.stopPropagation=addEvent.fixEvent.stopPropagation;a.target=a.srcElement;return a};addEvent.fixEvent.preventDefault=function(){this.returnValue=false};addEvent.fixEvent.stopPropagation=function(){this.cancelBubble=true};function removeEvent(d,c,b){if(typeof d.removeEventListener!="undefined"){d.removeEventListener(c,b,false)}else{if(d.events){for(var a in d.events[c]){if(d.events[c][a]==b){delete d.events[c][a]}}}}}function getInner(){if(typeof window.innerWidth!="undefined"){return{width:window.innerWidth,height:window.innerHeight}}else{return{width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}}}function getScroll(){return{top:document.documentElement.scrollTop||document.body.scrollTop,left:document.documentElement.scrollLeft||document.body.scrollLeft}}function getStyle(b,a){var c;if(typeof window.getComputedStyle!="undefined"){c=window.getComputedStyle(b,null)[a]}else{if(typeof b.currentStyle!="undeinfed"){c=b.currentStyle[a]}}return c}function hasClass(a,b){return a.className.match(new RegExp("(\\s|^)"+b+"(\\s|$)"))}function insertRule(b,d,c,a){if(typeof b.insertRule!="undefined"){b.insertRule(d+"{"+c+"}",a)}else{if(typeof b.addRule!="undefined"){b.addRule(d,c,a)}}}function deleteRule(b,a){if(typeof b.deleteRule!="undefined"){b.deleteRule(a)}else{if(typeof b.removeRule!="undefined"){b.removeRule(a)}}}function getInnerText(a){return(typeof a.textContent=="string")?a.textContent:a.innerText}function setInnerText(a,b){if(typeof element.textContent=="string"){element.textContent=b}else{element.innerText=b}}function offsetTop(a){var c=a.offsetTop;var b=a.offsetParent;while(b!=null){c+=b.offsetTop;b=b.offsetParent}return c}function trim(a){return a.replace(/(^\s*)|(\s*$)/g,"")}function inArray(c,b){for(var a in c){if(c[a]===b){return true}}return false}function prevIndex(c,a){var b=a.children.length;if(c==0){return b-1}return parseInt(c)-1}function nextIndex(c,a){var b=a.children.length;if(c==b-1){return 0}return parseInt(c)+1}function fixedScroll(){window.scrollTo(fixedScroll.left,fixedScroll.top)}function predef(a){a.preventDefault()}function setCookie(b,e,a,g,d,f){var c=encodeURIComponent(b)+"="+encodeURIComponent(e);if(a instanceof Date){c+="; expires="+a}if(g){c+="; expires="+a}if(d){c+="; domain="+d}if(f){c+="; secure"}document.cookie=c}function getCookie(b){var e=encodeURIComponent(b)+"=";var a=document.cookie.indexOf(e);var d=null;if(a>-1){var c=document.cookie.indexOf(";",a);if(c==-1){c=document.cookie.length}d=decodeURIComponent(document.cookie.substring(a+e.length,c))}return d}function unsetCookie(a){document.cookie=a+"= ; expires="+new Date(0)};