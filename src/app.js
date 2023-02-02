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
  eventProductDetailArticleToggle,
  showArticleShopping,
  showProduct,
} = require('./controllers/ProductController')
const {
  showCounterShopping,
  addProductShoppingCart,
  eventListenerShopping,
  showProductShoppingCard,
} = require('./controllers/ShoppingCartController')

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

    headerCategoriesContainer({
      onFilterCategories: ({ name, codeCategories }) => {
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
          codeCategories,
        })
      },
    })
  }

  showCounterShopping()

  eventNavbarEmail({
    validate: validateSection(),
    onLogin: () => {
      login()
    },
  })

  validateUser()

  initProduct()

  eventListenerShopping({
    callback: () => {
      showProductShoppingCard({
        callback: () => {
          showCounterShopping()
        },
      })
    },
  })
})()
