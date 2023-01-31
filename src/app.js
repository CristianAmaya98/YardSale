const {
  login,
  eventNavbarEmail,
  validateUser,
} = require('./controllers/LoginController')
const {
  showProduct,
  showCounterShopping,
  itemNavbarContainer,
  addProductShoppingCart,
  showArticleShopping,
  eventListenerShopping,
  showProductShoppingCard,
  eventProductDetailArticleToggle,
} = require('./controllers/ProductController')
const { getCategories } = require('./services/CategoryService')
const { getProducts } = require('./services/ProductService')
const { validateSectionUser } = require('./services/UserService')

;(() => {
  function initProduct() {
    function productAdd({ product }) {
      addProductShoppingCart({ product })
      showCounterShopping()
    }

    function showDetailArticle(product) {
      showArticleShopping({
        product,
        onEventAdd: (product) => {
          if (!validateSectionUser()) {
            login()
            return
          }
          productAdd({ product })
        },
        onEventClosed: () => {
          eventProductDetailArticleToggle()
        },
      })
    }

    showProduct({
      products: getProducts(),
      onEventAdd: (product) => {
        if (!validateSectionUser()) {
          login()
          return
        }
        productAdd({ product })
      },
      onEventDetail: (product) => {
        eventProductDetailArticleToggle()
        showDetailArticle(product)
      },
    })
  }

  showCounterShopping()
  itemNavbarContainer(getCategories())

  eventNavbarEmail({
    validate: validateSectionUser(),
    onLogin: () => {
      login()
    },
  })

  validateUser()

  initProduct()
})()
