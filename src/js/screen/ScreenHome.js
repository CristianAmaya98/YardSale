const { getAllProducts } = require('../controllers/ProductsController')

module.exports = function ({ data }) {
  const productsContainer = document.createElement('div')
  productsContainer.setAttribute('class', 'productos')

  const cardProducts = getAllProducts()
  cardProducts.forEach((cardProduct) => {
    productsContainer.appendChild(cardProduct)
  })

  return productsContainer
}
