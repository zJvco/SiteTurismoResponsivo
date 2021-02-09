// Idioma
const btn = document.querySelector('.seta')
const langBR = document.querySelector('.img-BR')

btn.addEventListener('click', () => {
    if (langBR.style.display === 'block') {
        langBR.style.display = 'none'
    }
    else {
        langBR.style.display = 'block'
    }
})

// Slider
function loadSlider() {
    const sliderImagens = document.querySelector('.imagens')
    const imagens = document.querySelectorAll('.imagens img')

    const btnEsquerda = document.querySelector('.seta-esquerda')
    const btnDireita = document.querySelector('.seta-direita')

    let counter = 1
    const size = imagens[0].clientWidth;

    sliderImagens.style.transform = 'translateX(' + (-size * counter) + 'px)'

    btnDireita.addEventListener('click', () => {
        if (counter >= imagens.length - 1) return
        sliderImagens.style.transition = 'transform 0.4s ease-in-out'
        counter++
        sliderImagens.style.transform = 'translateX(' + (-size * counter) + 'px)'
    })

    btnEsquerda.addEventListener('click', () => {
        if (counter <= 0) return
        sliderImagens.style.transition = 'transform 0.4s ease-in-out'
        counter--
        sliderImagens.style.transform = 'translateX(' + (-size * counter) + 'px)'
    })

    sliderImagens.addEventListener('transitionend', () => {
        if (imagens[counter].id === 'ultimaImg') {
            sliderImagens.style.transition = 'none'
            counter = imagens.length - 2
            sliderImagens.style.transform = 'translateX(' + (-size * counter) + 'px)'
        }
        if (imagens[counter].id === 'primeiraImg') {
            sliderImagens.style.transition = 'none'
            counter = imagens.length - counter
            sliderImagens.style.transform = 'translateX(' + (-size * counter) + 'px)'
        }
    })
}

// Hamburguer Menu
const hamburguer = document.querySelector('#hamburguer')
const navUL = document.querySelector('#navUL')

hamburguer.addEventListener('click', () => {
    navUL.classList.toggle('show')
})
