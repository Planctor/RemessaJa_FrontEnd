"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}!function(){var t,n,r,e,a,o;function i(e){e.target.nextElementSibling.classList.toggle("ativo"),1200<window.innerWidth&&("Pessoa Física"===e.target.innerHTML?r[1].classList.remove("ativo"):"Pessoa Jurídica"===e.target.innerHTML&&r[0].classList.remove("ativo"))}console.log(),window.innerWidth<955&&(e=document.querySelectorAll(".conteudo"),a=document.querySelector("#mobile"),o=document.body,e.forEach(function(e){e.addEventListener("click",function(){"ativo"==e.classList[1]?(a.classList.remove("ativo"),o.style.overflowY="scroll"):(a.classList.add("ativo"),o.style.overflowY="hidden")})})),e=document.querySelectorAll("[data-hover]"),r=document.querySelectorAll(".sub-menu"),e.forEach(function(e){e.addEventListener("click",i)}),t=document.querySelector("[data-nome]"),n=document.querySelector("[data-moeda]"),fetch("https://economia.awesomeapi.com.br/json/all/USD").then(function(e){return e.json()}).then(function(e){n.innerText=e.USD.ask,t.innerText=e.USD.code}),document.querySelectorAll("[data-mobile-lista]").forEach(function(t){t.addEventListener("click",function(e){e.preventDefault();e=t.nextElementSibling;0==e.classList.contains("ativo")?e.classList.add("ativo"):e.classList.remove("ativo")})}),new(function(){function t(e){_classCallCheck(this,t),this.menu=document.querySelector(e),this.itensMenu=_toConsumableArray(this.menu.children),this.html=document.documentElement}return _createClass(t,[{key:"remover",value:function(e){e.preventDefault(),this.itensMenu[0]!==e.target&&this.itensMenu[2]!==e.target&&this.itensMenu[1]!==e.target&&this.itensMenu.forEach(function(e){e.classList.remove("ativo")})}},{key:"adicionarCadaClasse",value:function(){this.itensMenu.forEach(function(e){e.classList.toggle("ativo")})}},{key:"adicionarClasseEvento",value:function(){var t=this;this.itensMenu.forEach(function(e){e.addEventListener("click",t.adicionarCadaClasse)})}},{key:"bindItens",value:function(){this.adicionarCadaClasse=this.adicionarCadaClasse.bind(this),this.remover=this.remover.bind(this)}},{key:"init",value:function(){return this.bindItens(),this.adicionarClasseEvento(),this}}]),t}())('[data-menu="conteudo"]').init()}();