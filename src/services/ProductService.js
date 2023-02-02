const { Product } = require('../models/Product')
const { catalogo, KINDS } = require('./Data')

module.exports = {
  getProducts: () => {
    const products = catalogo[KINDS.PRODUCTS]

    return products.map(
      ({ name, image, price, categoria, description, descuento }) =>
        new Product({ name, image, price, categoria, description, descuento })
    )
  },

  filterProductsCategory: ({ codeCategories }) => {
    const products = catalogo[KINDS.PRODUCTS]
    return products.filter(({ categoria }) => categoria === codeCategories)
  },
}
