var num = 0
const item = document.querySelector('.h-cart-card')

function increment() {
    num++;
    counter();
}

function decrement(e) {
    num--;
    counter();
}

function counter() {
    const header = document.querySelector('.cartCount')
    header.innerText = `${num}`
}
counter()