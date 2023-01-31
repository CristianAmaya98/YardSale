const {
  ComponentElementLi,
  ComponentElementLink,
} = require('./core/Components')

module.exports = {
  navbarItem: ({ name }) => {
    return new ComponentElementLi({
      children: [
        new ComponentElementLink({
          text: name,
        }),
      ],
    })
  },
}
