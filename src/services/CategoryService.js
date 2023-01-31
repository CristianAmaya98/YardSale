const { Category } = require('../models/Category')
const { catalogo, KINDS } = require('./Data')

module.exports = {
  getCategories: () => {
    const categories = catalogo[KINDS.CATEGORY]

    return categories.map(
      ({ name, codeCategories }) => new Category({ name, codeCategories })
    )
  },
}
