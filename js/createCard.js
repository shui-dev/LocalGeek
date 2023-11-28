for (let i = 0; i < product.length; i++) {
    const container = document.querySelector("#container-product")
    container.innerHTML += `
        <div class="card_product">
            <div class="card_sub">
                <div class="card_img">
                    <a href="${product[i].link}">
                        <span class="card_overlay"></span>
                        <img src="${product[i].img}" alt="">
                    </a>
                </div>
                <div class="card_info">
                    <div class="card_category">
                        ${product[i].category}
                    </div>
                    <div class="card_title">
                        <a href="${product[i].link}">${product[i].title}</a>
                    </div>
                    <div class="card_price">
                        <p>R$ ${product[i].price}</p>
                        <sub><ion-icon class="credit-card" name="card"></ion-icon> ${product[i].portion} de R$${product[i].sub_price} sem juros</sub>
                    </div>
                    <div onclick="increment()" class="card_pay">
                        <button class="${product[i].id}"><ion-icon class="card_icon" name="bag-add-outline"></ion-icon> ADICIONAR A CESTA</button>
                        <!-- <a href=""><ion-icon class="eye-icon" name="eye"></ion-icon></a> -->
                    </div>
                </div>
            </div>
        </div>
    `
}