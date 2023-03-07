const { counterCartShopping, getAllProducts } = require('./controllers')
const { showShoppingCart } = require('./controllers/ShoppingCartController')

const logo = document.querySelector('#logo')

logo.addEventListener('click', () => {
  getAllProducts()
})

counterCartShopping()
getAllProducts()
showShoppingCart()
