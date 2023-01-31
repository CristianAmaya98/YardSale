const {
  ComponentElementDiv,
  ComponentAttribute,
  ComponentElementImage,
  ComponentElementP,
  ComponentElementFigure,
  ComponentEvent,
} = require('./core/Components')

module.exports = {
  productCard: ({ product, onEventAdd, onEventDetail }) => {
    const { name, image, price } = product
    return new ComponentElementDiv({
      attributes: [
        new ComponentAttribute({ id: 'class', value: 'product-card' }),
      ],
      children: [
        new ComponentElementImage({
          urlImage: image,
          attributes: [
            new ComponentAttribute({ id: 'id', value: 'imageProduct' }),
          ],
          events: [
            new ComponentEvent({
              event: 'click',
              callback: () => {
                onEventDetail(product)
              },
            }),
          ],
        }),

        new ComponentElementDiv({
          attributes: [
            new ComponentAttribute({ id: 'class', value: 'product-info' }),
          ],
          children: [
            new ComponentElementDiv({
              children: [
                new ComponentElementP({
                  text: `$ ${price}`,
                }),
                new ComponentElementP({
                  text: name,
                }),
              ],
            }),

            new ComponentElementFigure({
              events: [
                new ComponentEvent({
                  event: 'click',
                  callback: () => {
                    onEventAdd(product)
                  },
                }),
              ],
              children: [
                new ComponentElementImage({
                  urlImage: './assets/icons/bt_add_to_cart.svg',
                  attributes: [
                    new ComponentAttribute({
                      id: 'alt',
                      value: 'carrito de compras',
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

  productShoppingCard: ({ product }) => {
    const { name, image, price } = product

    const shoppingContainer = document.createElement('div')
    shoppingContainer.classList.add('shopping-cart')

    const figureContainer = document.createElement('figure')

    const imageProduct = document.createElement('img')
    imageProduct.setAttribute('src', image)

    figureContainer.appendChild(imageProduct)
    shoppingContainer.appendChild(figureContainer)

    const priceProduct = document.createElement('p')
    priceProduct.innerText = `$ ${price}`

    const nameProduct = document.createElement('p')
    nameProduct.innerText = name

    shoppingContainer.appendChild(priceProduct)
    shoppingContainer.appendChild(nameProduct)

    const imageCartIcon = document.createElement('img')
    imageCartIcon.setAttribute('src', './assets/icons/icon_close.png')
    imageCartIcon.setAttribute('alt', 'close')
    shoppingContainer.appendChild(imageCartIcon)

    return shoppingContainer
  },
}
