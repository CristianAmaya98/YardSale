const { Product } = require('../models/Product')

const {
  ShoppingCartProductService,
} = require('../services/ShoppingCartService')
const {
  CardShoppingComponent,
  DetailShoppingComponent,
} = require('../components')
const { default: Swal } = require('sweetalert2')

// TODO: REVISAR ESTOS SELECTORES
// const navbarShoppingCart = document.querySelector('.navbar-shopping-cart')

const ShoppingCartController = () => {
  const elementContainer = document.querySelector('#aside')
  const shoppingCartProductService = ShoppingCartProductService()

  return {
    addProductShoppingCart: ({ product }) => {
      if (product instanceof Product) {
        shoppingCartProductService.addProductCart({ product })
      }
    },

    showProductShoppingCard: () => {
      elementContainer.innerHTML = ''

      if (shoppingCartProductService.isNotEmpityProductsCart()) {
        const products = shoppingCartProductService
          .getProductsCart()
          .map((product) => CardShoppingComponent({ product }).show())

        const shoppingDetail = DetailShoppingComponent({
          products,
          total: 10,
        }).show({
          onEventPay: () => {
            Swal.fire(
              'Pago Exitoso!',
              'Felicitaciones tu Compra ha sido todo un existo!!!!!!',
              'success'
            )
            shoppingCartProductService.removeProductsCart()
          },
        })

        elementContainer.appendChild(shoppingDetail)
      }
    },

    showCounterShopping: () => {
      return shoppingCartProductService.counterProductsCart()
    },
  }
}

module.exports = { ShoppingCartController }
