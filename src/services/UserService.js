const { catalogo, KINDS } = require('./Data')

module.exports = {
  validateSectionUser: () => {
    const user = catalogo[KINDS.LOGIN]
    return user.validate_credenciales
  },
}
