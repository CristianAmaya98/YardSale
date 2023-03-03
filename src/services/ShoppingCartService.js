const { KINDSTORAGE, getData, removeData, addData } = require('./DBStorage')

const ShoppingCartProductService = () => {
  let productsShopping = []
  const keyDBStorage = KINDSTORAGE.SHOPPING

  return {
    addProductCart: ({ product }) => {
      if (productsShopping?.length > 0) {
        productsShopping.unshift(product)
      } else {
        productsShopping = []
        productsShopping.push(product)
      }

      addData({ key: keyDBStorage, data: productsShopping })
      return [...productsShopping]
    },
    getProductsCart: () => {
      return productsShopping !== null ? [...productsShopping] : []
    },
    counterProductsCart: () => {
      productsShopping = JSON.parse(getData({ key: keyDBStorage }))
      return productsShopping?.length ? productsShopping.length : 0
    },
    removeProductsCart: () => {
      removeData({ key: keyDBStorage })
    },
    isNotEmpityProductsCart: () => {
      return productsShopping?.length > 0
    },
  }
}

module.exports = { ShoppingCartProductService }
