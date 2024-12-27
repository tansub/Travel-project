var menu = document.getElementById('container-nav');
var burgerBtn = document.getElementById('burger');
var closeBtn = document.getElementById('closeBtn');

burgerBtn.addEventListener('click', () => {
    menu.style.display = "flex"
    burgerBtn.style.display = "none"
})
closeBtn.addEventListener('click', () => {
    menu.style.display = "none"
    burgerBtn.style.display = "block"


})