const ProductosData = require('../db/ProductosData')

const findAllProducts = () => {
  const products = JSON.stringify(ProductosData)
  return JSON.parse(products)
}

const findByUUIDProduct = (uuid) => {
  return ProductosData.find((product) => product.uuid === uuid)
}

module.exports = { findAllProducts, findByUUIDProduct }
