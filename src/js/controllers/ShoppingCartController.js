const {
  counterProductsShopping,
  saveProductShopping,
} = require('../services/ProductosStorageService')

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
  shoppingCart.addEventListener('click', () => {})
}

module.exports = {
  counterCartShopping,
  addProductShopping,
}
