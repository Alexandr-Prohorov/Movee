let menu = document.querySelector('.burger-menu');
let lines = document.querySelector('.burger-menu_lines')
let overlay = document.querySelector('.burger-menu_overlay')



menu.addEventListener('click', function(e) {
    menu.classList.toggle('burger-menu_active'); 
})

