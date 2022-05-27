const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');
window.addEventListener('scroll', function(){
    nav.classList.toggle('active', window.scrollY > 0)
})

const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span');

ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
    ham.classList.toggle('girar');
});
