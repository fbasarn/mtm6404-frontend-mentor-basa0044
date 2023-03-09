const $container = document.querySelector('.container')
const $openMenu = document.querySelector('.hamburger-icon')
const $closeMenu = document.querySelector('.cross-icon')
const $nav = document.querySelector('nav')

$openMenu.addEventListener('click', function ShowMenu(){
    $nav.style.display = 'block'
    $closeMenu.style.display = 'block'
    $openMenu.style.display = 'none'
})

$closeMenu.addEventListener('click', function CloseMenu(){
    $nav.style.display = 'none'
    $closeMenu.style.display = 'none'
    $openMenu.style.display = 'block'
} )



    



