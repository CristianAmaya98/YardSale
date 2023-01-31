const navbarItemsContainer = document.querySelector('#items-navbar')
const { navbarItem } = require('../components/Navbar')
const { getCategories } = require('../services/CategoryService')

module.exports = {
  headerCategoriesContainer: () => {
    const categories = getCategories()
    categories.forEach((category) => {
      navbarItemsContainer.appendChild(navbarItem(category))
    })
  },
}
