!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("SimpleCanvas",[],e):"object"==typeof exports?exports.SimpleCanvas=e():t.SimpleCanvas=e()}(window,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t){var e;if(this.tempCanvas=null,this.tempContext=null,"CANVAS"==(e="string"==typeof t?document.getElementById(t):t).tagName)this.mainCanvas=e;else{this.mainCanvas=document.createElement("canvas");var n=e.getBoundingClientRect();this.mainCanvas.width=n.width,this.mainCanvas.height=n.height}this.mainContext=this.mainCanvas.getContext("2d")}return t.prototype.drawRect=function(t,e,n,o,i,r,a,l){void 0===i&&(i="black"),void 0===r&&(r=1),void 0===a&&(a=""),void 0===l&&(l=1);var u=this.mainContext;u.globalAlpha=l,a&&(u.fillStyle=a,u.fillRect(t,e,n,o)),r&&(u.strokeStyle=i,u.lineWidth=r,u.strokeRect(t,e,n,o))},t.prototype.drawLine=function(t,e,n,o,i,r,a){void 0===i&&(i="black"),void 0===r&&(r=1),void 0===a&&(a=1);var l=this.mainContext;l.globalAlpha=a,l.beginPath(),l.moveTo(t,e),l.lineTo(n,o),r&&(l.strokeStyle=i,l.lineWidth=r,l.stroke())},t.prototype.drawCircle=function(t,e,n,o,i,r,a){void 0===o&&(o="black"),void 0===i&&(i=1),void 0===r&&(r=""),void 0===a&&(a=1);var l=this.mainContext;l.beginPath(),l.lineWidth=i,l.globalAlpha=a,l.arc(t,e,n,0,2*Math.PI,!0),l.closePath(),i&&(l.strokeStyle=o,l.stroke()),r&&(l.fillStyle=r,l.fill())},t.prototype.drawImage=function(t,e,n,o,i,r){void 0===r&&(r=1);var a=this.mainContext,l=new Image;l.src=t,a.globalAlpha=r,l.onload=function(){a.drawImage(l,e,n,o,i)}},t}();e.default=o},function(t,e,n){t.exports=n(0)}])});
//# sourceMappingURL=simpleCanvas.js.map