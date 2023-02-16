const { detailProduct } = require('../components/Detail')

const { Product } = require('../models/Product')

const { ProductService } = require('../services/ProductService')
const { CardProductComponent, CardContainer } = require('../components')

const ProductsController = () => {
  const elementContainer = document.querySelector('#aside')
  const productService = ProductService()

  const renderProducts = ({
    products = [],
    onEventAdd = () => {},
    onEventDetail = () => {},
  }) => {
    const cardsContainer = CardContainer()
    products.forEach((product) =>
      cardsContainer.appendChild(
        CardProductComponent({
          product,
        }).show({ onEventAdd, onEventDetail })
      )
    )
    return cardsContainer
  }

  return {
    showProducts: ({ onEventAdd, onEventDetail }) => {
      const products = productService.findAllProducts()
      return renderProducts({ products, onEventAdd, onEventDetail })
    },
    showDetailProduct: ({ product, onEventAdd }) => {
      if (product instanceof Product) {
        const detailComponents = detailProduct({
          product,
          onEventAdd,
          onEventClosed: () => {
            elementContainer.innerHTML = ''
          },
        })

        elementContainer.innerHTML = ''
        elementContainer.appendChild(detailComponents)
      }
    },

    showFilterCodeCategoryProducts: ({
      codeCategory = '',
      onEventAdd = () => {},
      onEventDetail = () => {},
    }) => {
      const products = productService.filterProductCodeCategory({
        codeCategory,
      })
      renderProducts({ products, onEventAdd, onEventDetail })
    },
  }
}

module.exports = { ProductsController }
