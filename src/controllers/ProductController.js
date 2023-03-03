const { addData, KINDSTORAGE } = require('../services/DBStorage')
const { detailProduct } = require('../components/Detail')

const { Product } = require('../models/Product')
const { productCard, productShoppingCard } = require('../components/Cards')
const {
  sectionProducts,
  cleanMainContainer,
} = require('../components/SectionContainer')
const {
  getProducts,
  filterProductsCategory,
} = require('../services/ProductService')

const productDetailArticle = document.querySelector('.product-detail-article')

module.exports = {
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

  showProduct: ({ onEventAdd, onEventDetail, codeCategories = '' }) => {
    let products = []
    cleanMainContainer()
    if (codeCategories !== '') {
      products = filterProductsCategory({ codeCategories })
    } else {
      products = getProducts()
    }

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

  eventProductDetailArticleToggle: () => {
    if (!productDetailArticle.getAttribute('data-detail').includes('enactive'))
      return
    productDetailArticle.classList.toggle('inactive')
  },
}
