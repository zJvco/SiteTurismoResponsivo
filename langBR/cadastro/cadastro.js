const form = document.getElementById('form')
const nome = document.getElementById('nome')
const sobrenome = document.getElementById('sobrenome')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const senha2 = document.getElementById('senha2')

form.addEventListener('submit', (e) => {

    // validar se os campos estão preenchidos e corretos
    if (verificarLogin() !== true) {
        e.preventDefault()
    }
    if (verificarCheckbox() !== true) {
        e.preventDefault()
    }
})


// verificar inputs
function verificarLogin() {
    const nomeValue = nome.value.trim()
    const sobrenomeValue = sobrenome.value.trim()
    const emailValue = email.value.trim()
    const senhaValue = senha.value.trim()
    const senha2Value = senha2.value.trim()

    const valBooleanos = []

    // validar nome
    if (nomeValue === '') {
        definirErro(nome, 'Preencha o Campo')
    }
    else if (nomeValue.length < 5) {
        definirErro(nome, 'Preencha com mais de 5 Letras')
    }
    else {
        definirSucesso(nome)
        valBooleanos.push('true')
    }

    // validar sobrenome
    if (sobrenomeValue === '') {
        definirErro(sobrenome, 'Preencha o Campo')
    }
    else if (sobrenomeValue.length < 5) {
        definirErro(sobrenome, 'Preencha com mais de 5 Letras')
    }
    else {
        definirSucesso(sobrenome)
        valBooleanos.push('true')
    }

    // validar email
    if (emailValue === '') {
        definirErro(email, 'Preencha o Campo')
    }
    else if (!validarEmail(emailValue)) {
        definirErro(email, 'Email Inválido!')
    }
    else {
        definirSucesso(email)
        valBooleanos.push('true')
    }

    // validar senha
    if (senhaValue === '') {
        definirErro(senha, 'Preencha o Campo')
    }
    else if (senhaValue < 5) {
        definirErro(senha, 'Preencha com mais de 5 Letras')
    }
    else if (senhaValue !== senha2Value) {
        definirErro(senha, '')
    }
    else {
        definirSucesso(senha)
        valBooleanos.push('true')
    }

    // validar senha2
    if (senha2Value === '') {
        definirErro(senha2, 'Preencha o Campo')
    }
    else if (senha2Value < 5) {
        definirErro(senha2, 'Preencha com mais de 5 Letras')
    }
    else if (senha2Value !== senhaValue) {
        definirErro(senha2, 'Senha diferentes!')
    }
    else {
        definirSucesso(senha2)
        valBooleanos.push('true')
    }

    // validar se todos campos então corretos
    if (valBooleanos.length === 5) {
        return true
    }
}

// verificar checkbox
function verificarCheckbox() {
    const checkbox1 = document.getElementById('checkbox')
    const checkbox2 = document.getElementById('checkbox2')

    if ((!checkbox1.checked && !checkbox2.checked) || (!checkbox2.checked || !checkbox1.checked)) {
        window.alert('Marque as Caixas para Continuar!')
    }
    else {
        return true
    }
}


// definir sucesso e erro
function definirErro(input, mensagem) {
    const preencher = input.parentElement
    const txtErro = preencher.querySelector('span')

    txtErro.innerHTML = mensagem

    preencher.className = 'preencher erro'
}

function definirSucesso(input) {
    const preencher = input.parentElement

    preencher.className = 'preencher sucesso'
}

// validar se é email ou não
function validarEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}
