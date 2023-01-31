const { generator } = require('./generatorUUID')

function Product({
  name,
  image,
  price,
  categoria,
  description,
  descuento = false,
}) {
  this.id = generator()
  this.name = name
  this.image = image
  this.price = price
  this.categoria = categoria
  this.description = description
  this.descuento = descuento
}

module.exports = { Product }
