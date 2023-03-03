const {
  ComponenteElementAside,
  ComponentAttribute,
  ComponentElementDiv,
  ComponentElementImage,
  ComponentElementP,
  ComponentElementButton,
  ComponentEvent,
  ComponenteElementSpan,
} = require('./core/Components')

const DetailProductComponent = ({ product }) => {
  return {
    show: ({ onEventAdd, onEventClosed }) => {
      const { image, price, description, name } = product
      return new ComponenteElementAside({
        attributes: [
          new ComponentAttribute({
            id: 'class',
            value: 'product-detail-article',
          }),
        ],
        children: [
          new ComponentElementDiv({
            attributes: [
              new ComponentAttribute({
                id: 'class',
                value: 'product-detail-article-close',
              }),
            ],
            events: [
              new ComponentEvent({
                event: 'click',
                callback: () => {
                  onEventClosed()
                },
              }),
            ],
            children: [
              new ComponentElementImage({
                urlImage: '../assets/icons/icon_close.png',
                attributes: [
                  new ComponentAttribute({
                    id: 'alt',
                    value: 'close',
                  }),
                ],
              }),
            ],
          }),

          new ComponentElementImage({
            urlImage: image,
          }),

          new ComponentElementDiv({
            attributes: [
              new ComponentAttribute({
                id: 'class',
                value: 'product-detail-article-info',
              }),
            ],
            children: [
              new ComponentElementP({
                text: `$ ${price.toLocaleString()}`,
              }),
              new ComponentElementP({
                text: name,
              }),
              new ComponentElementP({
                text: description,
              }),

              new ComponentElementButton({
                text: 'Agregar Carrito',
                attributes: [
                  new ComponentAttribute({
                    id: 'class',
                    value: 'primary-button add-to-cart-button',
                  }),
                ],
                events: [
                  new ComponentEvent({
                    event: 'click',
                    callback: () => {
                      onEventAdd(product)
                    },
                  }),
                ],
                urlImage: '../assets/icons/bt_add_to_cart.svg',
              }),
            ],
          }),
        ],
      })
    },
  }
}

const DetailShoppingComponent = ({ products, total = 0 }) => {
  return {
    show: ({ onEventPay = () => {} }) => {
      return new ComponenteElementAside({
        attributes: [
          new ComponentAttribute({
            id: 'class',
            value: 'product-detail active',
          }),
        ],

        children: [
          new ComponentElementDiv({
            attributes: [
              new ComponentAttribute({
                id: 'class',
                value: 'title-container',
              }),
            ],

            children: [
              new ComponentElementImage({
                urlImage: '../assets/icons/flechita.svg',
                attributes: [
                  new ComponentAttribute({
                    id: 'alt',
                    value: 'arrow',
                  }),
                ],
              }),
              new ComponentElementP({
                text: 'My order',
                attributes: [
                  new ComponentAttribute({
                    id: 'class',
                    value: 'title',
                  }),
                ],
              }),
            ],
          }),

          new ComponentElementDiv({
            attributes: [
              new ComponentAttribute({
                id: 'class',
                value: 'my-order-content',
              }),
            ],
            children: products,
          }),

          new ComponentElementDiv({
            attributes: [
              new ComponentAttribute({
                id: 'class',
                value: 'order',
              }),
            ],
            children: [
              new ComponentElementP({
                children: [
                  new ComponenteElementSpan({
                    text: 'Total',
                  }),
                ],
              }),

              new ComponentElementP({
                text: `$ ${total}`,
              }),
            ],
          }),

          new ComponentElementButton({
            attributes: [
              new ComponentAttribute({
                id: 'class',
                value: 'primary-button',
              }),
            ],
            events: [
              new ComponentEvent({
                event: 'click',
                callback: () => {
                  onEventPay()
                },
              }),
            ],
            text: 'Pagar',
          }),
        ],
      })
    },
  }
}

module.exports = { DetailProductComponent, DetailShoppingComponent }
