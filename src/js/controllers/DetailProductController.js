const { screenDetailProduct } = require('../components/screen/DetailProduct')
const { RootMainContainer } = require('./RootController')

const detailProduct = (product) => {
  console.log({ product })
  const detailContainer = document.createElement('div')
  detailContainer.setAttribute('class', 'detail')

    detailContainer.innerHTML = screenDetailProduct({ product });

  RootMainContainer({
    element: detailContainer,
  })
}

module.exports = { detailProduct }
