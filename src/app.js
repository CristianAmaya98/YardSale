const { MainContainerRoot, HeaderNavbarComponent } = require('./components')
const {
  CategoryController,
  ProductsController,
  ShoppingCartController,
} = require('./controllers')

;(function () {
  const mainContainerRoot = MainContainerRoot()

  mainContainerRoot.addComponent({
    component: HeaderNavbarComponent().show({ childrenCategories: [] }),
  })

  // -----------------------------------------------------------//
  const shoppingCartController = ShoppingCartController()
  const productController = ProductsController()
  const categoryController = CategoryController()

  const addProductCartShopping = (product) => {
    shoppingCartController.addProductShoppingCart({ product })
    shoppingCartController.showCounterShopping()
  }

  const detailProduct = (product) => {
    productController.showDetailProduct({
      product,
      onEventAdd: addProductCartShopping,
    })
  }

  // shoppingCartController.showCounterShopping()
  // shoppingCartController.showProductShoppingCard()

  // categoryController.headerCategoriesContainer({
  //   onFilterCategories: ({ name, codeCategories }) => {
  //     console.log(codeCategories)
  //     productController.showFilterCodeCategoryProducts({
  //       codeCategory: codeCategories,
  //       onEventAdd: addProductCartShopping,
  //       onEventDetail: detailProduct,
  //     })
  //   },
  // })

  mainContainerRoot.addComponent({
    component: productController.showProducts({
      onEventAdd: addProductCartShopping,
      onEventDetail: detailProduct,
    }),
  })
})()
