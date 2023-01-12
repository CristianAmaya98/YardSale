const navbarEmail = document.querySelector('.navbar-email')
const cardsContainer = document.querySelector('.cards-container')
navbarEmail.innerText = 'platzi@example.com'

const KINDS = {
    SHOPPING: 'shopping'
}
const productsShopping = []

const counterCart = document.getElementById('count-cart')


const products = [
    {
        name: 'Bike',
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '120'
    },
    {
        name: 'Bike',
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '120'
    },
    {
        name: 'Bike',
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '120'
    },
    {
        name: 'Bike',
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '120'
    },
    {
        name: 'Bike',
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '120'
    },
    {
        name: 'Bike',
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '120'
    },
    {
        name: 'Bike',
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '120'
    },
    {
        name: 'Bike',
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '120'
    },
    {
        name: 'Bike',
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '120'
    },
    {
        name: 'Bike',
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '120'
    },
    {
        name: 'Bike',
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '120'
    },
    {
        name: 'Bike',
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '120'
    },
    {
        name: 'Bike',
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '120'
    },
    {
        name: 'Bike',
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '120'
    },
    {
        name: 'Bike',
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '120'
    },
]

function initProducts() {
    for (const product of products) {
        cardsContainer.appendChild(productCard(product))
    }
}

function addProductShoppingCart(product) {
    return () => {
        productsShopping.unshift(product)
        addData(KINDS.SHOPPING, productsShopping)
        counterProductShopping()
    }
}

function counterProductShopping() {
    counterCart.innerText = productsShopping.length
}


function addData(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
    return localStorage.getItem(key).length
}



function productCard({ name, image, price }) {
    const productContainer = document.createElement('div')
    productContainer.classList.add('product-card')

    const imageProduct = document.createElement('img')
    imageProduct.setAttribute('src', image)

    const productInfoContainer = document.createElement('div')
    productInfoContainer.classList.add('product-info')

    const productDivConainer = document.createElement('div')

    const priceProduct = document.createElement('p')
    priceProduct.innerText = `$ ${price}`

    const nameProduct = document.createElement('p')
    nameProduct.innerText = name

    productDivConainer.appendChild(priceProduct)
    productDivConainer.appendChild(nameProduct)
    productInfoContainer.appendChild(productDivConainer)

    const figureContainer = document.createElement('figure')

    const imageCartIcon = document.createElement('img')
    imageCartIcon.setAttribute('src', './assets/icons/bt_add_to_cart.svg')
    imageCartIcon.setAttribute('alt', 'carrito de compras')
    figureContainer.addEventListener('click', addProductShoppingCart({ name, image, price }))
    figureContainer.appendChild(imageCartIcon)
    productInfoContainer.appendChild(figureContainer)

    productContainer.appendChild(imageProduct)
    productContainer.appendChild(productInfoContainer)
    return productContainer
}



initProducts()

