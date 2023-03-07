const {
  screenShoppingProduct,
} = require('../components/screen/ShoppingProduct')
const {
  counterProductsShopping,
  saveProductShopping,
  findAllProductsShopping,
} = require('../services/ProductosStorageService')
const { RootMainContainer } = require('./RootController')

const counterShopping = document.querySelector('#counter-shopping')
const shoppingCart = document.querySelector('#shopping-cart')

const counterCartShopping = () => {
  counterShopping.innerText = counterProductsShopping()
}

const addProductShopping = (product) => {
  saveProductShopping({ product })
  counterCartShopping()
}

const showShoppingCart = () => {
  shoppingCart.addEventListener('click', () => {
    const productCart = findAllProductsShopping()
    RootMainContainer({
      element: screenShoppingProduct(productCart),
    })
  })
}

module.exports = {
  counterCartShopping,
  addProductShopping,
  showShoppingCart,
}
