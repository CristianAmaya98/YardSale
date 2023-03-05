const {
  ComponentElementDiv,
  ComponentAttribute,
  ComponentElementImage,
  ComponenteElementSpan,
  ComponentElementP,
  ComponentEvent,
} = require('./core/Components')

module.exports = function (
  product,
  onAddShopping = () => {},
  onDetaillProduct = () => {}
) {
  return new ComponentElementDiv({
    attributes: [
      new ComponentAttribute({
        id: 'class',
        value: 'producto',
      }),
    ],
    children: [
      new ComponentElementImage({
        attributes: [
          new ComponentAttribute({
            id: 'class',
            value: 'producto__imagen',
          }),
        ],
        events: [
          new ComponentEvent({
            event: 'click',
            callback: () => {
              onDetaillProduct(product)
            },
          }),
        ],
        urlImage: product.product?.image,
      }),
      new ComponentElementDiv({
        attributes: [
          new ComponentAttribute({
            id: 'class',
            value: 'producto__info',
          }),
        ],
        children: [
          new ComponentElementDiv({
            attributes: [
              new ComponentAttribute({
                id: 'class',
                value: 'producto__textos',
              }),
            ],
            children: [
              new ComponentElementP({
                attributes: [
                  new ComponentAttribute({
                    id: 'class',
                    value: 'producto__price',
                  }),
                ],
                text: `$ ${Number(product.product?.price).toLocaleString(
                  'es-CO'
                )}`,
              }),
              new ComponentElementP({
                attributes: [
                  new ComponentAttribute({
                    id: 'class',
                    value: 'producto__name',
                  }),
                ],
                text: product.product?.name,
              }),
            ],
          }),
          new ComponenteElementSpan({
            attributes: [
              new ComponentAttribute({
                id: 'class',
                value: 'producto__icon-cart',
              }),
            ],
            events: [
              new ComponentEvent({
                event: 'click',
                callback: () => {
                  onAddShopping(product.product)
                },
              }),
            ],
          }),
        ],
      }),
    ],
  })
}
