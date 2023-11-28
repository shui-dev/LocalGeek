function ClickLeft0() {
    const container = document.querySelector('#container-product')
    container.scrollTo({
        left: container.scrollLeft - 650,
        behavior: "smooth"
    })
}

function ClickRight0() {
    const container = document.querySelector('#container-product')
    container.scrollTo({
        left: container.scrollLeft + 650,
        behavior: "smooth"
    })
}