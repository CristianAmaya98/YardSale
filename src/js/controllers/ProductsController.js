const ProductCard = require('../components/ProductCard')
const { findAllProducts } = require('../services/ProductosService')
const { addProductShopping } = require('./ShoppingCartController')

const onAddShopping = (product) => {
  addProductShopping(product)
}

const onDetaillProduct = (product) => {
  window.location.href = `#/detail/${product.uuid}`
}

const getAllProducts = () => {
  const products = findAllProducts()
  return products.map((product) =>
    ProductCard(product, onAddShopping, onDetaillProduct)
  )
}

module.exports = { getAllProducts }
