const {
  headerCategoriesContainer,
} = require('./controllers/CategoryController')
const {
  eventNavbarEmail,
  login,
  validateSection,
  validateUser,
} = require('./controllers/LoginController')
const {
  addProductShoppingCart,
  eventProductDetailArticleToggle,
  showArticleShopping,
  showCounterShopping,
  showProduct,
} = require('./controllers/ProductController')

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
          if (!validateSection()) {
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
      onEventAdd: (product) => {
        if (!validateSection()) {
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
  headerCategoriesContainer()

  eventNavbarEmail({
    validate: validateSection(),
    onLogin: () => {
      login()
    },
  })

  validateUser()

  initProduct()
})()
