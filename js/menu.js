const close = document.querySelector("#close");
const menu = document.querySelector("#open");
const hList = document.querySelector(".header-list");

const openCart = document.querySelector('.cartOpen');
const closeCart = document.querySelector('#closeCart');
const cart = document.querySelector('.header-cart');

menu.onclick = function () {
    hList.classList.add('active')
    cart.classList.remove('openCart');
}

close.onclick = function () {
    hList.classList.remove('active')
}

openCart.onclick = function () {
    cart.classList.add('openCart');
    hList.classList.remove('active')
}

closeCart.addEventListener('click', () => {
    cart.classList.remove('openCart');
})

//  cart counter

// document.addEventListener('click', (e) => {
//     const el = e.target;
//     if(el.classList.countains(''))
// })