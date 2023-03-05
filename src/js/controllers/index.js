const { getAllProducts } = require('./ProductsController')
const { RootMainContainer } = require('./RootController')
const { counterCartShopping } = require('./ShoppingCartController')

module.exports = { getAllProducts, counterCartShopping, RootMainContainer }
