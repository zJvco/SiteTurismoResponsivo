// Validar Login
const form = document.querySelector('#form')
const email = document.querySelector('#email')
const senha = document.querySelector('#senha')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    verificarEmail()
    verificarSenha()
})

// EMAIL
function verificarEmail() {
    // Valores dos inputs
    const emailValue = email.value.trim()

    // Validar Email
    if (emailValue === '') {
        // definir função erro
        definirErroEmail(email, 'Preencha o Campo!')
    }
    else if (!validarEmail(emailValue)) {
        definirErroEmail(email, 'Email Inválido!')
    }
    else {
        // definir função sucesso
        definirSucessoEmail(email)
    }
}

function definirErroEmail(input, mensagem) {
    const preencher = input.parentElement
    const txtErroEmail = document.querySelector('.txtErroEmail')

    // adicionar a mensagem de erro
    txtErroEmail.innerText = mensagem

    // adicionar classe de erro
    preencher.className = 'preencher erro'

}

function definirSucessoEmail(input) {
    const preencher = input.parentElement
    
    preencher.className = 'preencher sucesso'
}

function validarEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

// SENHA
function verificarSenha() {
    // Valores dos inputs
    const senhaValue = senha.value.trim()

    // Validar Senha
    if (senhaValue === '') {
        // definir função erro
        definirErroSenha(senha, 'Preencha o Campo!') 
    }
    else {
        // definir função sucesso
        definirSucessoSenha(senha)
    }
}

function definirErroSenha(input, mensagem) {
    const preencher = input.parentElement
    const txtErroSenha = document.querySelector('.txtErroSenha')

    // adicionar a mensagem de erro
    txtErroSenha.innerText = mensagem

    // adicionar classe de erro
    preencher.className = 'preencher erro'

}

function definirSucessoSenha(input) {
    const preencher = input.parentElement
    
    preencher.className = 'preencher sucesso'
}