const navbarItemsContainer = document.querySelector('#items-navbar')

const { NavbarCategoriesComponent } = require('../components')
const { getCategories } = require('../services/CategoryService')

const CategoryController = () => {
  const categories = getCategories()

  return {
    headerCategoriesContainer: ({ onFilterCategories = () => {} }) => {
      categories.forEach((category) => {
        navbarItemsContainer.appendChild(
          NavbarCategoriesComponent({ category }).show({ onFilterCategories })
        )
      })
    },
  }
}

module.exports = { CategoryController }
