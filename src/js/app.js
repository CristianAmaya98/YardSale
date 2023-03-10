const { counterCartShopping } = require('./controllers')
const shoppingCart = document.querySelector('#shopping-cart')
// const emailShopping = document.querySelector('#email-shopping')

const routing = require('./routes/routing')

window.location.href = '#/'

shoppingCart.addEventListener('click', () => {
  window.location.href = '#/shopping'
})

window.addEventListener('hashchange', () => {
  const route = window.location.hash
  routing(route)
})
