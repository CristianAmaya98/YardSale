const {
  ComponentElementLi,
  ComponentElementLink,
  ComponentEvent,
  ComponentElementDiv,
  ComponentAttribute,
  ComponentElementImage,
  ComponenteElementUl,
} = require('./core/Components')

const NavbarCategoriesComponent = ({
  category,
  onFilterCategories = () => {},
}) => {
  return new ComponentElementLi({
    children: [
      new ComponentElementLink({
        text: category.name,
        events: [
          new ComponentEvent({
            event: 'click',
            callback: () => {
              onFilterCategories({ ...category })
            },
          }),
        ],
      }),
    ],
  })
}

const NavbarLeftComponent = ({ childrenCategories = [] }) => {
  return new ComponentElementDiv({
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
  })
}

const NavbarRightComponent = ({ counterCart = 0, userText = '' }) => {
  return new ComponentElementDiv({
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
            text: userText,
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
                text: counterCart,
              }),
            ],
          }),
        ],
      }),
    ],
  })
}

module.exports = {
  NavbarCategoriesComponent,
  NavbarLeftComponent,
  NavbarRightComponent,
}
