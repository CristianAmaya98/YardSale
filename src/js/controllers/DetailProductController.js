const { findByUUIDProduct } = require('../services/ProductosService')

const getDetailProduct = (uuid) => {
  return findByUUIDProduct(Number(uuid))
}

module.exports = { getDetailProduct }
