// Validar Login
const form = document.querySelector('#form')
const email = document.querySelector('#email')
const senha = document.querySelector('#senha')

form.addEventListener('submit', (e) => {

    // validar se os campos estão preenchidos e corretos
    if (verificarLogin() !== true) {
        e.preventDefault()
    }
})

function verificarLogin() {
    const emailValue = email.value.trim()
    const senhaValue = senha.value.trim()

    const valBooleanos = []

    // Validar Email
    if (emailValue === '') {
        // definir função erro
        definirErro(email, 'Preencha o Campo!')
    }
    else if (!validarEmail(emailValue)) {
        definirErro(email, 'Email Inválido!')
    }
    else {
        // definir função sucesso
        definirSucesso(email)
        valBooleanos.push('true')
    }

    // Validar Senha
    if (senhaValue === '') {
        // definir função erro
        definirErro(senha, 'Preencha o Campo!') 
    }
    else {
        // definir função sucesso
        definirSucesso(senha)
        valBooleanos.push('true')
    }

    if (valBooleanos.length === 2) {
        return true
    }
}

function definirErro(input, mensagem) {
    const preencher = input.parentElement
    const txtErroEmail = preencher.querySelector('span')

    // adicionar a mensagem de erro
    txtErroEmail.innerText = mensagem

    // adicionar classe de erro
    preencher.className = 'preencher erro'

}

function definirSucesso(input) {
    const preencher = input.parentElement

    preencher.className = 'preencher sucesso'
}

function validarEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}