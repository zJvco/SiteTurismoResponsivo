let btn = document.querySelector('.seta')
let langUSA = document.querySelector('.img-EUA')

btn.addEventListener('click', () => {
    if (langUSA.style.display == 'block') {
        langUSA.style.display = 'none'
    }
    else {
        langUSA.style.display = 'block'
    }

})