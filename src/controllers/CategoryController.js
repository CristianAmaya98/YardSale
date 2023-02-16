const { NavbarCategoriesComponent } = require('../components')
const { getCategories } = require('../services/CategoryService')

const CategoryController = () => {
  const categories = getCategories()

  return {
    headerCategoriesContainer: ({ onFilterCategories = () => {} }) => {
      return categories.map((category) =>
        NavbarCategoriesComponent({ category, onFilterCategories })
      )
    },
  }
}

module.exports = { CategoryController }
