const { default: Swal } = require('sweetalert2')
const {
  counterProductsShopping,
  saveProductShopping,
  findAllProductsShopping,
  deleteProductsShopping,
} = require('../services/ProductosStorageService')

const counterShopping = document.querySelector('#counter-shopping')

const counterCartShopping = () => {
  counterShopping.innerText = counterProductsShopping()
}

const addProductShopping = (product) => {
  saveProductShopping({ product })
  counterCartShopping()
}

const onCleanShopping = () => {
  deleteProductsShopping()
  counterCartShopping()
}
const onPayShopping = () => {
  Swal.fire('Compra Exitosa!', 'Compra realizada Exitosamente!', 'success')
  onCleanShopping()
}

const getAllProductShopping = () => {
  return findAllProductsShopping()
}

module.exports = {
  counterCartShopping,
  addProductShopping,
  getAllProductShopping,
  onPayShopping,
  onCleanShopping,
}
