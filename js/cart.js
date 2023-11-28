document.addEventListener('click', (e) => {
    const el = e.target;
    const cart = document.querySelector('.h-cart-items');

    if (el.classList.contains('id1')) {
        cart.innerHTML += `
        <div class="h-cart-card r1">
            <div class="h-card-info">
                <div class="h-card-img">
                    <img src="${product[0].img}" alt="">
                </div>
                <div class="h-card-content">
                <a href="${product[0].link}" class="h-card-title">
                    <p>${product[0].title}</p>
                </a>
                </div>
            </div>
            <div onclick="decrement()" class="h-cart-close">
                <p><i class="r1 fa-regular fa-trash-can"></i></p>
                <p class="r1 h-price">${product[0].price}</p>
            </div>
        </div>
    `
    }

    if (el.classList.contains('id2')) {
        cart.innerHTML += `
        <div class="h-cart-card">
            <div class="h-card-info">
                <div class="h-card-img">
                    <img src="${product[1].img}" alt="">
                </div>
                <div class="h-card-content">
                    <a href="${product[1].link}" class="h-card-title">
                        <p>${product[1].title}</p>
                    </a>
                </div>
            </div>
            <div onclick="decrement()" class="h-cart-close">
                <p><i class="r2 fa-regular fa-trash-can"></i></p>
                <p class="r2 h-price">${product[1].price}</p>
            </div>
        </div>
    `
    }

    if (el.classList.contains('id3')) {
        cart.innerHTML += `
        <div class="h-cart-card">
            <div class="h-card-info">
                <div class="h-card-img">
                    <img src="${product[2].img}" alt="a">
                </div>
                <div class="h-card-content">
                    <a href="${product[2].link}" class="h-card-title">
                        <p>${product[2].title}</p>
                    </a>
                </div>
            </div>
            <div onclick="decrement()" class="h-cart-close">
                <p><i class="r3 fa-regular fa-trash-can"></i></p>
                <p class="r3 h-price">${product[2].price}</p>
            </div>
        </div>
    `
    }

    if (el.classList.contains('id4')) {
        cart.innerHTML += `
        <div class="h-cart-card">
            <div class="h-card-info">
                <div class="h-card-img">
                    <img src="${product[3].img}" alt="">
                </div>
                <div class="h-card-content">
                    <a href="${product[3].link}" class="h-card-title">
                        <p>${product[3].title}</p>
                    </a>
                </div>
            </div>
            <div onclick="decrement()" class="h-cart-close">
                <p><i class="r4 fa-regular fa-trash-can"></i></p>
                <p class="r4 h-price">${product[3].price}</p>
            </div>
        </div>
    `
    }

    if (el.classList.contains('id5')) {
        cart.innerHTML += `
        <div class="h-cart-card">
            <div class="h-card-info">
                <div class="h-card-img">
                    <img src="${product[4].img}" alt="">
                </div>
                <div class="h-card-content">
                    <a href="${product[4].link}" class="h-card-title">
                        <p>${product[4].title}</p>
                    </a>
                </div>
            </div>
            <div onclick="decrement()" class="h-cart-close">
                <p><i class="r5 fa-regular fa-trash-can"></i></p>
                <p class="r5 h-price">${product[4].price}</p>
            </div>
        </div>
    `
    }

    if (el.classList.contains('id6')) {
        cart.innerHTML += `
        <div class="h-cart-card">
            <div class="h-card-info">
                <div class="h-card-img">
                    <img src="${product[5].img}" alt="">
                </div>
                <div class="h-card-content">
                    <a href="${product[5].link}" class="h-card-title">
                        <p>${product[5].title}</p>
                    </a>
                </div>
            </div>
            <div onclick="decrement()" class="h-cart-close">
                <p><i class="r6 fa-regular fa-trash-can"></i></p>
                <p class="r6 h-price">${product[5].price}</p>
            </div>
        </div>
    `
    }
    if (el.classList.contains('id7')) {
        cart.innerHTML += `
        <div class="h-cart-card">
            <div class="h-card-info">
                <div class="h-card-img">
                    <img src="${product[6].img}" alt="">
                </div>
                <div class="h-card-content">
                    <a href="${product[6].link}" class="h-card-title">
                        <p>${product[6].title}</p>
                    </a>
                </div>
            </div>
            <div onclick="decrement()" class="h-cart-close">
                <p><i class="r7 fa-regular fa-trash-can"></i></p>
                <p class="r7 h-price">${product[6].price}</p>
            </div>
        </div>
    `
    }
})

// remover do carrinho
document.addEventListener('click', (e) => {
    const el = e.target;
    if (el.classList.contains('r1')) {
        const hcard = document.querySelector('.h-cart-card')
        hcard.remove()
    }
    if (el.classList.contains('r2')) {
        const hcard = document.querySelector('.h-cart-card')
        hcard.remove()
    }
    if (el.classList.contains('r3')) {
        const hcard = document.querySelector('.h-cart-card')
        hcard.remove()
    }
    if (el.classList.contains('r4')) {
        const hcard = document.querySelector('.h-cart-card')
        hcard.remove()
    }
    if (el.classList.contains('r5')) {
        const hcard = document.querySelector('.h-cart-card')
        hcard.remove()
    }
    if (el.classList.contains('r6')) {
        const hcard = document.querySelector('.h-cart-card')
        hcard.remove()
    }
    if (el.classList.contains('r7')) {
        const hcard = document.querySelector('.h-cart-card')
        hcard.remove()
    }
})