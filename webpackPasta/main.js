(()=>{"use strict";console.log(),window.innerWidth<955&&function(){const e=document.querySelectorAll(".conteudo"),t=document.querySelector("#mobile"),i=document.body;e.forEach((e=>{e.addEventListener("click",(()=>{"ativo"==e.classList[1]?(t.classList.remove("ativo"),i.style.overflowY="scroll"):(t.classList.add("ativo"),i.style.overflowY="hidden")}))}))}(),function(){const e=document.querySelectorAll("[data-hover]"),t=document.querySelectorAll(".sub-menu");function i(e){e.target.nextElementSibling.classList.toggle("ativo"),window.innerWidth>1200&&("Pessoa Física"===e.target.innerHTML?t[1].classList.remove("ativo"):"Pessoa Jurídica"===e.target.innerHTML&&t[0].classList.remove("ativo"))}e.forEach((e=>{e.addEventListener("click",i)}))}(),function(){const e=document.querySelector("[data-nome]"),t=document.querySelector("[data-moeda]");fetch("https://economia.awesomeapi.com.br/json/all/USD").then((e=>e.json())).then((i=>{t.innerText=i.USD.ask,e.innerText=i.USD.code}))}(),document.querySelectorAll("[data-mobile-lista]").forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const i=e.nextElementSibling;0==i.classList.contains("ativo")?i.classList.add("ativo"):i.classList.remove("ativo")}))})),new class{constructor(e){this.menu=document.querySelector(e),this.itensMenu=[...this.menu.children],this.html=document.documentElement}remover(e){e.preventDefault(),this.itensMenu[0]!==e.target&&this.itensMenu[2]!==e.target&&this.itensMenu[1]!==e.target&&this.itensMenu.forEach((e=>{e.classList.remove("ativo")}))}adicionarCadaClasse(){this.itensMenu.forEach((e=>{e.classList.toggle("ativo")}))}adicionarClasseEvento(){this.itensMenu.forEach((e=>{e.addEventListener("click",this.adicionarCadaClasse)}))}bindItens(){this.adicionarCadaClasse=this.adicionarCadaClasse.bind(this),this.remover=this.remover.bind(this)}init(){return this.bindItens(),this.adicionarClasseEvento(),this}}('[data-menu="conteudo"]').init()})();