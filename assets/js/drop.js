export default function dropdown() {
    const links = document.querySelectorAll("[data-mobile-lista]")

    links.forEach(l => {
        l.addEventListener('click', (e) => {
            e.preventDefault()
            const mostrar = l.nextElementSibling
            if (mostrar.classList.contains('ativo') == false) {
                mostrar.classList.add('ativo')
            } else {
                mostrar.classList.remove('ativo')
            }
        })
    })

}

