const {
  ComponenteElementNav,
  ComponentElementImage,
  ComponentAttribute,
  ComponentElementDiv,
  ComponenteElementUl,
  ComponentElementLi,
} = require('./core/Components')

const HeaderNavbarComponent = () => {
  return {
    show: ({ childrenCategories = [] }) => {
      return new ComponenteElementNav({
        children: [
          new ComponentElementImage({
            urlImage: '../assets/icons/icon_menu.svg',
            attributes: [
              new ComponentAttribute({
                id: 'alt',
                value: 'menu',
              }),
              new ComponentAttribute({
                id: 'class',
                value: 'menu',
              }),
            ],
          }),

          new ComponentElementDiv({
            attributes: [
              new ComponentAttribute({
                id: 'class',
                value: 'navbar-left',
              }),
            ],
            children: [
              new ComponentElementImage({
                urlImage: '../assets/logos/logo_yard_sale.svg',
                attributes: [
                  new ComponentAttribute({
                    id: 'alt',
                    value: 'logo',
                  }),
                  new ComponentAttribute({
                    id: 'class',
                    value: 'logo',
                  }),
                ],
              }),
              new ComponenteElementUl({
                children: childrenCategories,
              }),
            ],
          }),

          new ComponentElementDiv({
            attributes: [
              new ComponentAttribute({
                id: 'class',
                value: 'navbar-right',
              }),
            ],
            children: [
              new ComponenteElementUl({
                children: [
                  new ComponentElementLi({
                    attributes: [
                      new ComponentAttribute({
                        id: 'class',
                        value: 'navbar-email',
                      }),
                    ],
                    text: 'user@example.com',
                  }),
                  new ComponentElementLi({
                    attributes: [
                      new ComponentAttribute({
                        id: 'class',
                        value: 'navbar-shopping-cart',
                      }),
                    ],
                    children: [
                      new ComponentElementImage({
                        urlImage: '../assets/icons/icon_shopping_cart.svg',
                        attributes: [
                          new ComponentAttribute({
                            id: 'alt',
                            value: 'shopping cart',
                          }),
                        ],
                      }),

                      new ComponentElementDiv({
                        text: 0,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    },
  }
}

module.exports = { HeaderNavbarComponent }
