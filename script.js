const mobileMenu = document.querySelector('.js-mobile-menu')
const btnMobile = document.querySelector('.js-btn-mobile')

btnMobile.addEventListener('click', (event) =>{
    event.preventDefault()

    mobileMenu.classList.toggle('active')
})


const header = document.querySelector('.js-header')
const logo = document.querySelector('.js-logo')

window.onscroll = function(){
    var top = window.scrollY;

    if(top>=100){
        logo.classList.add('active')
    }
    else{
        logo.classList.remove('active')

    }
}

