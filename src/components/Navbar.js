const {
  ComponentElementLi,
  ComponentElementLink,
  ComponentEvent,
} = require('./core/Components')

module.exports = {
  navbarItem: ({ category, onFilterCategories = () => {} }) => {
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
