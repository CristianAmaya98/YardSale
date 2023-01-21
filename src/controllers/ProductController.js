const { addData, KINDSTORAGE } = require('../services/DBStorage')
const { addProduct } = require('./ShoppingCartController')
const { navbarItem } = require('../components/Navbar')
const { productCard, productShoppingCard } = require('../components/Cards')
const { getProduct, counterProduct } = require('./ShoppingCartController')
const { detailProduct } = require('../components/Detail')

const cardsContainer = document.querySelector('.cards-container')
const counterCart = document.getElementById('count-cart')
const desktopMenu = document.querySelector('.desktop-menu')
const myOrderContent = document.querySelector('.my-order-content')
const navbarEmail = document.querySelector('.navbar-email')
const navbarItemsContainer = document.querySelector('#items-navbar')
const navbarShoppingCart = document.querySelector('.navbar-shopping-cart')
const productDetailArticle = document.querySelector('.product-detail-article')
const productDetailShopping = document.querySelector('.product-detail')

navbarEmail.innerText = 'platzi@example.com'

module.exports = {
  addProductShoppingCart: (product) => {
    addData(KINDSTORAGE.SHOPPING, addProduct(product))
  },
  showArticleShopping: (product) => {
    detailProduct(product)
  },

  showProduct: (products, callback) => {
    for (const product of products) {
      cardsContainer.appendChild(productCard(product, callback))
    }
  },

  showProductShoppingCard: () => {
    for (const product of getProduct()) {
      myOrderContent.appendChild(productShoppingCard(product))
    }
  },
  showCounterShopping: () => {
    counterCart.innerText = counterProduct()
  },
  itemNavbarContainer: (items) => {
    for (const item of items) {
      navbarItemsContainer.appendChild(navbarItem(item))
    }
  },

  eventListenerShopping: (callback) => {
    navbarShoppingCart.addEventListener('click', () => {
      productDetailShopping.classList.toggle('inactive')

      if (!productDetailShopping.getAttribute('inactive')) {
        myOrderContent.innerHTML = ''
        callback()
      }
    })
  },

  // Get Event

  eventProductDetailArticleToggle: () => {
    productDetailArticle.classList.toggle('inactive')
  },

  eventNavbarEmail: () => {
    navbarEmail.addEventListener('click', () => {
      desktopMenu.classList.toggle('inactive')
    })
  },
}
