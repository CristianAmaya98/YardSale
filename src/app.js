const { catalogo, KINDS } = require('./services/Data');

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
} = require('./controllers/ProductController');

(() => {
  function init() {
    showCounterShopping();
    showProduct(catalogo[KINDS.PRODUCTS], (isAdd, product) => {
      if (!isAdd) {
        eventProductDetailArticleToggle();
        showArticleShopping(product);
        return;
      }
      addProductShoppingCart(product);
      showCounterShopping();
    });

    itemNavbarContainer(catalogo[KINDS.CATEGORY]);

    eventNavbarEmail();
    eventListenerShopping(showProductShoppingCard);
  }

  init();
})();
