const {
  saveProductsStorage,
  findAllStorage,
  deleteAllStorage,
} = require('./DBLocalStorage')

let productsStorage = []

const KINS_STORAGE = 'shopping'

const saveProductShopping = ({ product }) => {
  productsStorage = findAllStorage({ key: KINS_STORAGE }) ?? []
  productsStorage = [product, ...productsStorage]
  saveProductsStorage({ key: KINS_STORAGE, data: productsStorage })
}

const findAllProductsShopping = () => {
  productsStorage = findAllStorage({ key: KINS_STORAGE })
  return [...productsStorage]
}

const counterProductsShopping = () => {
  productsStorage = findAllStorage({ key: KINS_STORAGE })
  return productsStorage?.length ?? 0
}

const deleteProductsShopping = () => {
  deleteAllStorage({ key: KINS_STORAGE })
}

module.exports = {
  saveProductShopping,
  findAllProductsShopping,
  counterProductsShopping,
  deleteProductsShopping,
}
