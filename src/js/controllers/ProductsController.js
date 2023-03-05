const ProductCard = require('../components/ProductCard')
const { findAllProducts } = require('../services/ProductosService')
const { detailProduct } = require('./DetailProductController')
const { RootMainContainer } = require('./RootController')
const { addProductShopping } = require('./ShoppingCartController')

const onAddShopping = (product) => {
  addProductShopping(product)
}

const onDetaillProduct = (product) => {
  console.log('Click Detail')
  detailProduct(product)
}

const getAllProducts = () => {
  const products = findAllProducts()

  const productsContainer = document.createElement('div')
  productsContainer.setAttribute('class', 'productos')
  products.forEach((product) => {
    productsContainer.appendChild(
      ProductCard(product, onAddShopping, onDetaillProduct)
    )
  })

  RootMainContainer({
    element: productsContainer,
  })
}

module.exports = { getAllProducts }
