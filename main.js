(()=>{"use strict";var t={206:(t,e,r)=>{t.exports=r.p+"images/new-year.jpg"}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var c=e[o]={exports:{}};return t[o](c,c.exports,r),c.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),(()=>{function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}r(206),new(function(){function e(t){var r=t.selector,o=t.targetDate,n=t.errorTitle;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.refs={clockDays:document.querySelector("".concat(r,' [data-value="days"]')),clockHours:document.querySelector("".concat(r,' [data-value="hours"]')),clockMins:document.querySelector("".concat(r,' [data-value="mins"]')),clockSecs:document.querySelector("".concat(r,' [data-value="secs"]')),title:document.querySelector("".concat(r," .title"))},this.errorTitle=n,this.start(o)}var r,o;return r=e,(o=[{key:"pad",value:function(t){return String(t).padStart(2,"0")}},{key:"getTimeComponents",value:function(t){return{days:this.pad(Math.floor(t/864e5)),hours:this.pad(Math.floor(t%864e5/36e5)),mins:this.pad(Math.floor(t%36e5/6e4)),secs:this.pad(Math.floor(t%6e4/1e3))}}},{key:"updateDate",value:function(t){var e=t.days,r=t.hours,o=t.mins,n=t.secs;this.refs.clockDays.textContent="".concat(e),this.refs.clockHours.textContent="".concat(r),this.refs.clockMins.textContent="".concat(o),this.refs.clockSecs.textContent="".concat(n)}},{key:"start",value:function(t){var e=this;if(t<Date.now())return this.refs.clockDays.textContent="⁂",this.refs.clockHours.textContent="⁂",this.refs.clockMins.textContent="⁂",this.refs.clockSecs.textContent="⁂",void(this.refs.title.textContent="".concat(this.errorTitle));setInterval((function(){e.updateDate(e.getTimeComponents(t-Date.now()))}),1e3)}}])&&t(r.prototype,o),e}())({selector:"#timer-1",targetDate:new Date("Jan 1, ".concat(2023)),errorTitle:"С Новым ".concat(2023," годом!")})})()})();