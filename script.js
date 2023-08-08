navMenu = document.querySelector('.navMenu')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.navList')
rightNav = document.querySelector('.rightNav')

navMenu.addEventListener('click', ()=>{
    navList.classList.toggle('v-class');
    rightNav.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})