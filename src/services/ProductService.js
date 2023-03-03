const { Product } = require('../models/Product')
const { catalogo, KINDS } = require('../db/Data')

const ProductService = () => {
  const products = catalogo[KINDS.PRODUCTS]

  return {
    findAllProducts: () => {
      return products.map(
        ({ name, image, price, categoria, description, descuento }) =>
          new Product({ name, image, price, categoria, description, descuento })
      )
    },
    filterProductCodeCategory: ({ codeCategory }) => {
      const products = catalogo[KINDS.PRODUCTS]
      return products.filter(({ categoria }) => categoria === codeCategory)
    },
  }
}

module.exports = { ProductService }
