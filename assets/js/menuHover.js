export default function menu() {
    const itens = document.querySelectorAll("[data-hover]")
    const lista = document.querySelectorAll(".sub-menu")

    function click(e) {
        const t = e.target.nextElementSibling
        t.classList.toggle('ativo')

        if (window.innerWidth > 1200){
            if (e.target.innerHTML === "Pessoa Física") {
                lista[1].classList.remove('ativo')  
            } else if (e.target.innerHTML === "Pessoa Jurídica") {
                lista[0].classList.remove('ativo')
            }
        }        
    }

    itens.forEach(i => {
        i.addEventListener('click', click)
    })
}


