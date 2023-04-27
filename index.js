const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 200)
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

menu.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};