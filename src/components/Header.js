const {
  ComponenteElementNav,
  ComponentElementImage,
  ComponentAttribute,
} = require('./core/Components')

const HeaderNavbarComponent = ({ children = [] }) => {
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
      ...children,
    ],
  })
}

module.exports = { HeaderNavbarComponent }
