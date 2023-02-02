const { default: Swal } = require('sweetalert2')
const { productShoppingCard } = require('../components/Cards')
const { Product } = require('../models/Product')
const { KINDSTORAGE, addData, removeData } = require('../services/DBStorage')
const {
  getProduct,
  counterProduct,
  addProduct,
} = require('../services/ShoppingCartService')

const navbarShoppingCart = document.querySelector('.navbar-shopping-cart')
const productDetailShopping = document.querySelector('.product-detail')
const myOrderContent = document.querySelector('.my-order-content')
const counterCart = document.getElementById('count-cart')
const buttonPagar = document.querySelector('#pagar')
const totalPagar = document.querySelector('#total-pagar')

module.exports = {
  addProductShoppingCart: ({ product }) => {
    if (product instanceof Product) {
      addData({
        key: KINDSTORAGE.SHOPPING,
        data: addProduct(product),
      })
    }
  },

  eventListenerShopping: ({ callback }) => {
    navbarShoppingCart.addEventListener('click', () => {
      productDetailShopping.classList.toggle('inactive')

      if (!productDetailShopping.getAttribute('inactive')) {
        myOrderContent.innerHTML = ''
        callback()
      }
    })
  },

  showProductShoppingCard: ({ callback }) => {
    const prices = []

    if (getProduct().length <= 0) return

    for (const product of getProduct()) {
      prices.push(Number(product.price))
      myOrderContent.appendChild(productShoppingCard(product))
    }

    const total = prices.reduce((total, valor) => total + valor, 0)
    totalPagar.innerText = `$ ${String(total).toLocaleString()}`

    buttonPagar.addEventListener('click', () => {
      Swal.fire(
        'Pago Exitoso!',
        'Felicitaciones tu Compra ha sido todo un existo!!!!!!',
        'success'
      )
      totalPagar.innerText = `$ 0`
      myOrderContent.innerHTML = ''
      removeData({ key: KINDSTORAGE.SHOPPING })
      callback()
    })
  },

  showCounterShopping: () => {
    counterCart.innerText = counterProduct()
  },
}
