let productsStorage = []

const KINS_STORAGE = 'shopping'

const saveProductsStorage = (products) => {
  localStorage.setItem(KINS_STORAGE, JSON.stringify(products))
}
const findAllProductsStorage = () => {
  return JSON.parse(localStorage.getItem(KINS_STORAGE))
}

const saveProductShopping = ({ product }) => {
  productsStorage = findAllProductsStorage() ?? []
  if (productsStorage.length > 0) {
    productsStorage.unshift(product)
  } else {
    productsStorage.push(product)
  }
  saveProductsStorage(productsStorage)
}

const findAllProductsShopping = () => {
  productsStorage = findAllProductsStorage()
  return [...productsStorage]
}

const counterProductsShopping = () => {
  productsStorage = findAllProductsStorage()
  return productsStorage?.length ?? 0
}

module.exports = {
  saveProductShopping,
  findAllProductsShopping,
  counterProductsShopping,
}
