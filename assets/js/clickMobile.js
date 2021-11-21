export default function menuMobileShow() {
    const hamburguer = document.querySelectorAll('.conteudo')
    const mobile = document.querySelector('#mobile')
    const congela = document.body

    hamburguer.forEach(h => {
        h.addEventListener('click', () => {
            const menuClass = h.classList
            if (menuClass[1] == "ativo") {
                mobile.classList.remove('ativo')
                congela.style.overflowY = 'scroll'
            } else {
                mobile.classList.add('ativo')
                congela.style.overflowY = 'hidden'
            }
        })
    })
}