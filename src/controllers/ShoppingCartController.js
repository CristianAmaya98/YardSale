const { KINDSTORAGE, getData } = require('../services/DBStorage')

let productsShopping = []

module.exports = {
  addProduct: (product) => {
    if (productsShopping?.length > 0) {
      productsShopping.unshift(product)
      return productsShopping
    }

    productsShopping = []
    productsShopping.push(product)
    return productsShopping
  },

  getProduct: () => {
    return [...productsShopping]
  },
  counterProduct: () => {
    productsShopping = JSON.parse(getData({ key: KINDSTORAGE.SHOPPING }))
    return productsShopping?.length ? productsShopping.length : 0
  },
}
