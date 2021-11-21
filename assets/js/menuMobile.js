export default class Menu {
    constructor(menu) {
        this.menu = document.querySelector(menu)
        this.itensMenu = [...this.menu.children]
        this.html = document.documentElement
    }

    remover(e) {
        e.preventDefault();
        if (this.itensMenu[0] !== e.target && this.itensMenu[2] !== e.target && this.itensMenu[1] !== e.target) {
            this.itensMenu.forEach(iten => {
                iten.classList.remove('ativo');
            });
        }
    }

    adicionarCadaClasse() {
        this.itensMenu.forEach(iten => {
            iten.classList.toggle('ativo');
        });
    }

    adicionarClasseEvento() {
        this.itensMenu.forEach(iten => {
            iten.addEventListener('click', this.adicionarCadaClasse)
        })
    }

    bindItens() {
        this.adicionarCadaClasse = this.adicionarCadaClasse.bind(this);
        this.remover = this.remover.bind(this)
    }

    init() {
        this.bindItens();
        this.adicionarClasseEvento();
        return this;
    }
}