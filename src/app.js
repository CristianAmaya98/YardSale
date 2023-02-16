const {
  MainContainerRoot,
  HeaderNavbarComponent,
  NavbarLeftComponent,
  NavbarRightComponent,
  MainProductsContainerCards,
} = require('./components')
const { EMAIL_DEFAULT } = require('./constantes')
const {
  CategoryController,
  ProductsController,
  ShoppingCartController,
} = require('./controllers')

;(function () {
  const mainContainerRoot = MainContainerRoot({ root: 'root-main' })
  const shoppingCartController = ShoppingCartController()
  const productController = ProductsController()
  const categoryController = CategoryController()

  const onFilterCategories = ({ name, codeCategories }) => {
    console.log(codeCategories)
    // productController.showFilterCodeCategoryProducts({
    //   codeCategory: codeCategories,
    //   onEventAdd: addProductCartShopping,
    //   onEventDetail: detailProduct,
    // })
  }

  const addProductCartShopping = (product) => {
    shoppingCartController.addProductShoppingCart({ product })
    mainContainerRoot.cleanContainer()
  }

  const detailProduct = (product) => {
    productController.showDetailProduct({
      product,
      onEventAdd: addProductCartShopping,
    })
  }

  mainContainerRoot.addComponents({
    components: [
      HeaderNavbarComponent({
        children: [
          NavbarLeftComponent({
            childrenCategories: categoryController.headerCategoriesContainer({
              onFilterCategories,
            }),
          }),
          NavbarRightComponent({
            counterCart: shoppingCartController.showCounterShopping(),
            userText: EMAIL_DEFAULT,
          }),
        ],
      }),
      MainProductsContainerCards({
        childrenProducts: [
          productController.showProducts({
            onEventAdd: addProductCartShopping,
            onEventDetail: detailProduct,
          }),
        ],
      }),
    ],
  })

  // -----------------------------------------------------------//

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
})()
