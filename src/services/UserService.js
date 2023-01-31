const { EMAIL_DEFAULT } = require('../constantes')
const { catalogo, KINDS } = require('./Data')
const { KINDSTORAGE, getData, addData } = require('./DBStorage')

module.exports = {
  validateSectionUser: () => {
    const userData = JSON.parse(getData({ key: KINDSTORAGE.USER }))
    const user = catalogo[KINDS.LOGIN]
    return userData?.email ? true : user.validate_credenciales
  },

  getEmailUser: () => {
    const userData = JSON.parse(getData({ key: KINDSTORAGE.USER }))
    return userData?.email ? userData.email : EMAIL_DEFAULT
  },

  saveSectionUser: ({ user }) => {
    addData({
      key: KINDSTORAGE.USER,
      data: user,
    })
  },
}
