!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.fieldSize=t}var t,n,i;return t=e,(n=[{key:"draw",value:function(){var e=document.createElement("div");e.id="container",document.body.appendChild(e);for(var t=0,n=0;n<this.fieldSize;n+=1){var r=document.createElement("div");r.className="row",e.insertAdjacentElement("afterbegin",r);for(var i=0;i<this.fieldSize;i+=1){var o=document.createElement("div");o.className="cell",o.id="cell_".concat(t),r.insertAdjacentElement("beforeend",o),t+=1}}}}])&&r(t.prototype,n),i&&r(t,i),e}(),o=n.p+"2dbd01ce16c0fa83cb67e20c73dedb66.png";function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.fieldSize=t,this.goblin=document.createElement("img"),this.goblin.src=o,this.currentPos=0,this.lose=0,this.score=0,this.timeout=null,this.topScore=window.localStorage.getItem("topScore"),document.querySelectorAll(".cell").forEach((function(e){return e.addEventListener("click",(function(e){null!==n.timeout&&(clearTimeout(n.timeout),e.target===n.goblin?(document.getElementById("current-score").innerText="".concat(n.score+=1),n.try()):n.losePoint())}))}))}var t,n,r;return t=e,(n=[{key:"generateRand",value:function(){for(var e=this.currentPos;e===this.currentPos;)e=Math.floor(Math.random()*(Math.pow(this.fieldSize,2)-1));return e}},{key:"endGame",value:function(){this.lose=0,this.score>this.topScore&&(this.topScore=this.score,window.localStorage.setItem("topScore",this.topScore),document.getElementById("top-score").innerText=this.topScore),this.score=0,document.getElementById("cell_".concat(this.currentPos)).removeChild(this.goblin),document.getElementById("start-btn").classList.toggle("visible"),this.timeout=null}},{key:"losePoint",value:function(){this.lose+=1,5===this.lose?this.endGame():(window.clearTimeout(this.timeout),this.try())}},{key:"try",value:function(){var e=this;this.drawGoblin(),this.timeout=window.setTimeout((function(){e.losePoint()}),1e3)}},{key:"drawGoblin",value:function(){null!==this.timeout&&document.getElementById("cell_".concat(this.currentPos)).removeChild(this.goblin),this.currentPos=this.generateRand(),document.getElementById("cell_".concat(this.currentPos)).insertAdjacentElement("afterbegin",this.goblin)}}])&&c(t.prototype,n),r&&c(t,r),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.fieldSize=t}var t,n,r;return t=e,(n=[{key:"startGame",value:function(){var e=this;this.field=new i(this.fieldSize),this.field.draw(),this.game=new s(this.fieldSize);var t=document.getElementById("container"),n=window.localStorage.getItem("topScore");this.startBtn=document.createElement("button"),this.startBtn.id="start-btn",this.startBtn.innerText="Погнали!",this.scores=document.createElement("div"),this.scores.id="scores",this.topScore=document.createElement("p"),this.topScore.innerHTML='Лучший счет: <span id="top-score">'.concat(n||0,"</span>"),this.currentScore=document.createElement("p"),this.currentScore.innerHTML='Текущий счет: <span id="current-score">0</span>',this.scores.insertAdjacentElement("afterbegin",this.topScore),this.scores.insertAdjacentElement("beforeend",this.currentScore),t.insertAdjacentElement("beforeend",this.scores),t.insertAdjacentElement("beforeend",this.startBtn),this.startBtn.classList.add("visible"),this.startBtn.addEventListener("click",(function(){e.startBtn.classList.toggle("visible"),document.getElementById("current-score").innerText=0,e.game.try()}))}}])&&a(t.prototype,n),r&&a(t,r),e}())(4).startGame()}]);