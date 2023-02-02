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

  productShoppingCard: (product) => {
    console.log({ product })
    const { name, image, price } = product
    return new ComponentElementDiv({
      attributes: [
        new ComponentAttribute({
          id: 'class',
          value: 'shopping-cart',
        }),
      ],
      children: [
        new ComponentElementFigure({
          children: [
            new ComponentElementImage({
              urlImage: image,
            }),
          ],
        }),
        new ComponentElementP({
          text: `$ ${price.toLocaleString()}`,
        }),
        new ComponentElementP({
          text: name,
        }),
        new ComponentElementImage({
          urlImage: './assets/icons/icon_close.png',
          attributes: [
            new ComponentAttribute({
              id: 'alt',
              value: 'close',
            }),
          ],
        }),
      ],
    })
  },
}
