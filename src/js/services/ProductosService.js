const ProductosData = require('../db/ProductosData')

const findAllProducts = () => {
  const products = JSON.stringify(ProductosData)
  return JSON.parse(products)
}

module.exports = { findAllProducts }
