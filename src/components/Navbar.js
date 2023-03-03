const {
  ComponentElementLi,
  ComponentElementLink,
  ComponentEvent,
} = require('./core/Components')

const NavbarCategoriesComponent = ({ category }) => {
  return {
    show: ({ onFilterCategories = () => {} }) => {
      return new ComponentElementLi({
        children: [
          new ComponentElementLink({
            text: category.name,
            events: [
              new ComponentEvent({
                event: 'click',
                callback: () => {
                  onFilterCategories({ ...category })
                },
              }),
            ],
          }),
        ],
      })
    },
  }
}

module.exports = {
  NavbarCategoriesComponent,
}
