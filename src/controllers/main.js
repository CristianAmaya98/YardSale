const cardsContainer = document.querySelector('.cards-container')
const counterCart = document.getElementById('count-cart')
const myOrderContent = document.querySelector('.my-order-content')
const navbarEmail = document.querySelector('.navbar-email')
const navbarShoppingCart = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')

navbarEmail.innerText = 'platzi@example.com'

const KINDS = {
  SHOPPING: 'shopping'
}
let productsShopping = []

navbarShoppingCart.addEventListener('click', () => {
  productDetail.classList.toggle('inactive')

  if (!productDetail.getAttribute('inactive')) {
    myOrderContent.innerHTML = ''
    showProductShoppingCard()
  }
})

const catalogo = {
  products: [
    {
      id: 1,
      name: 'Bike 0',
      image:
        'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      price: '120'
    },
    {
      id: 2,
      name: 'Bike 2',
      image:
        'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      price: '120'
    },
    {
      id: 3,
      name: 'Bike 3',
      image:
        'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      price: '120'
    },
    {
      id: 4,
      name: 'Bike 4',
      image:
        'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      price: '120'
    },
    {
      id: 5,
      name: 'Bike 5',
      image:
        'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      price: '120'
    },
    {
      id: 6,
      name: 'Bike 6',
      image:
        'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      price: '120'
    },
    {
      id: 7,
      name: 'Bike 7',
      image:
        'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      price: '120'
    },
    {
      id: 8,
      name: 'Bike 8',
      image:
        'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      price: '120'
    },
    {
      id: 9,
      name: 'Bike 9',
      image:
        'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      price: '120'
    },
    {
      id: 10,
      name: 'Bike 10',
      image:
        'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      price: '120'
    },
    {
      id: 11,
      name: 'Bike 11',
      image:
        'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      price: '120'
    },
    {
      id: 12,
      name: 'Bike 12',
      image:
        'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      price: '120'
    },
    {
      id: 13,
      name: 'Bike 13',
      image:
        'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      price: '120'
    },
    {
      id: 14,
      name: 'Bike 14',
      image:
        'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      price: '120'
    },
    {
      id: 15,
      name: 'Bike 15',
      image:
        'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      price: '120'
    }
  ],
  category: [
    {
      name: 'All'
    },
    {
      name: 'Clothes'
    },
    {
      name: 'Electronics'
    },
    {
      name: 'Furnitures'
    },
    {
      name: 'Toys'
    },
    {
      name: 'Others'
    }
  ]
}

function initProducts () {
  counterProductShopping()
  for (const product of catalogo.products) {
    cardsContainer.appendChild(productCard(product))
  }
}

function addProductShoppingCart (product) {
  return () => {
    productsShopping.unshift(product)
    addData(KINDS.SHOPPING, productsShopping)
    counterProductShopping()
  }
}

function counterProductShopping () {
  productsShopping = JSON.parse(getData(KINDS.SHOPPING))
  counterCart.innerText = productsShopping.length
}

function addData (key, data) {
  localStorage.setItem(key, JSON.stringify(data))
  return localStorage.getItem(key).length
}

function getData (key) {
  return localStorage.getItem(key)
}

function productCard ({ name, image, price, id }) {
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
  figureContainer.addEventListener(
    'click',
    addProductShoppingCart({ name, image, price, id })
  )
  figureContainer.appendChild(imageCartIcon)
  productInfoContainer.appendChild(figureContainer)

  productContainer.appendChild(imageProduct)
  productContainer.appendChild(productInfoContainer)
  return productContainer
}

function showProductShoppingCard () {
  for (const product of productsShopping) {
    myOrderContent.appendChild(productShoppingCard(product))
  }
}

function productShoppingCard ({ name, image, price, id }) {
  const shoppingContainer = document.createElement('div')
  shoppingContainer.setAttribute('id', 'product-' + id)
  shoppingContainer.classList.add('shopping-cart')

  const figureContainer = document.createElement('figure')

  const imageProduct = document.createElement('img')
  imageProduct.setAttribute('src', image)

  figureContainer.appendChild(imageProduct)
  shoppingContainer.appendChild(figureContainer)

  const priceProduct = document.createElement('p')
  priceProduct.innerText = `$ ${price}`

  const nameProduct = document.createElement('p')
  nameProduct.innerText = name

  shoppingContainer.appendChild(priceProduct)
  shoppingContainer.appendChild(nameProduct)

  const imageCartIcon = document.createElement('img')
  imageCartIcon.setAttribute('src', './assets/icons/icon_close.png')
  imageCartIcon.setAttribute('alt', 'close')
  shoppingContainer.appendChild(imageCartIcon)

  return shoppingContainer
}

initProducts()
