
const { validateSection, RootMainContainer } = require('../controllers')
const { ScreenAuth, ScreenHome, ScreenDetailProduct, ScreenShoppingCart, ScreenRegistrerUser } = require('../screen')


const routes = {
  home: ScreenHome,
  detail: ScreenDetailProduct,
  auth: ScreenAuth,
  shopping: ScreenShoppingCart,
  registerUser: ScreenRegistrerUser,
}

module.exports = function (route) {
  route = String(route).trim()
  if (route === '#/') {
    window.location.href = validateSection() ? '#/home' : '#/auth'
    return
  }
  const [, router, ...data] = route.split('/')

  RootMainContainer({
    element: routes[router]({ data }),
  })
}
