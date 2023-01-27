const { addData, KINDSTORAGE } = require('../services/DBStorage')
const { addProduct } = require('./ShoppingCartController')
const { navbarItem } = require('../components/Navbar')
const { productCard, productShoppingCard } = require('../components/Cards')
const { getProduct, counterProduct } = require('./ShoppingCartController')
const { detailProduct } = require('../components/Detail')
const { Product } = require('../models/Product')

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
  addProductShoppingCart: ({ product }) => {
    if (product instanceof Product) {
      addData(KINDSTORAGE.SHOPPING, addProduct(product))
    }
  },
  showArticleShopping: ({
    product,
    onEventAdd,
    onEventClosed: onEventCloseListener,
  }) => {
    productDetailArticle.setAttribute('data-detail', 'active')
    detailProduct({
      product,
      onEventAdd,
      onEventClosed: () => {
        productDetailArticle.setAttribute('data-detail', 'enactive')
        onEventCloseListener()
      },
    })
  },

  showProduct: ({ products = [], onEventAdd, onEventDetail }) => {
    products.forEach((product) =>
      cardsContainer.appendChild(
        productCard({
          product,
          onEventAdd,
          onEventDetail,
        })
      )
    )
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
    if (!productDetailArticle.getAttribute('data-detail').includes('enactive'))
      return
    productDetailArticle.classList.toggle('inactive')
  },

  eventNavbarEmail: () => {
    navbarEmail.addEventListener('click', () => {
      desktopMenu.classList.toggle('inactive')
    })
  },
}
