const { autenticado } = require('../db/UserData')

const validateSection = function () {
  return autenticado
}

module.exports = { validateSection }
