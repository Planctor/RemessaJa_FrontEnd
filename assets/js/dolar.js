export default function api() {
    const nome = document.querySelector('[data-nome]')
    const moeda = document.querySelector('[data-moeda]')

    const a = fetch('https://economia.awesomeapi.com.br/json/all/USD')
    a.then((r) => {
        return r.json()
    }).then((jason) => {
        moeda.innerText = jason.USD.ask
        nome.innerText = jason.USD.code
    })
}

