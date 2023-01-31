const { addData, KINDSTORAGE } = require('../services/DBStorage')
const { addProduct } = require('./ShoppingCartController')
const { detailProduct } = require('../components/Detail')
const { getProduct, counterProduct } = require('./ShoppingCartController')
const { Product } = require('../models/Product')
const { productCard, productShoppingCard } = require('../components/Cards')
const { sectionProducts } = require('../components/SectionContainer')
const { getProducts } = require('../services/ProductService')
const counterCart = document.getElementById('count-cart')
const myOrderContent = document.querySelector('.my-order-content')
const navbarShoppingCart = document.querySelector('.navbar-shopping-cart')
const productDetailArticle = document.querySelector('.product-detail-article')
const productDetailShopping = document.querySelector('.product-detail')

module.exports = {
  addProductShoppingCart: ({ product }) => {
    if (product instanceof Product) {
      addData({
        key: KINDSTORAGE.SHOPPING,
        data: addProduct(product),
      })
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

  showProduct: ({ onEventAdd, onEventDetail }) => {
    const products = getProducts()
    const cardsContainer = sectionProducts()
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
}
