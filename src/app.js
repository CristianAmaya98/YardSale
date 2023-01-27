const {
  showProduct,
  showCounterShopping,
  itemNavbarContainer,
  addProductShoppingCart,
  showArticleShopping,
  eventListenerShopping,
  showProductShoppingCard,
  eventProductDetailArticleToggle,
  eventNavbarEmail,
} = require('./controllers/ProductController')
const { getCategories } = require('./services/CategoryService')
const { getProducts } = require('./services/ProductService')

;(() => {
  async function init() {
    showCounterShopping()

    function productAdd({ product }) {
      addProductShoppingCart({ product })
      showCounterShopping()
    }

    function showDetailArticle(product) {
      showArticleShopping({
        product,
        onEventAdd: (product) => {
          console.log(product)
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
        productAdd({ product })
      },
      onEventDetail: (product) => {
        eventProductDetailArticleToggle()
        showDetailArticle(product)
      },
    })

    // if (isAdd) {
    //   eventProductDetailArticleToggle();
    //   const { close, productSelected } = showArticleShopping(product);
    //   if (close) {
    //     console.log('Hello');
    //     eventProductDetailArticleToggle();
    //   }
    // } else {
    //   addProductShoppingCart(product);
    //   showCounterShopping();
    // }

    // itemNavbarContainer(getCategories());
    // eventNavbarEmail();
    // eventListenerShopping(showProductShoppingCard);
  }

  init()
})()
