const { sectionLogin } = require('../components/SectionContainer')
const { EMAIL_DEFAULT } = require('../constantes')
const { UserLogin } = require('../models/User')
const { addData, KINDSTORAGE, getData } = require('../services/DBStorage')
const desktopMenu = document.querySelector('.desktop-menu')
const navbarEmail = document.querySelector('.navbar-email')

module.exports = {
  login: () => {
    sectionLogin({
      onLogin: ({ email, password }) => {
        addData({
          key: KINDSTORAGE.USER,
          data: new UserLogin({ email, password }),
        })
      },
    })
  },

  eventNavbarEmail: ({ validate = false, onLogin = () => {} }) => {
    navbarEmail.addEventListener('click', () => {
      if (!validate) {
        onLogin()
        return
      }
      desktopMenu.classList.toggle('inactive')
    })
  },

  validateUser: () => {
    const userData = JSON.parse(getData({ key: KINDSTORAGE.USER }))
    navbarEmail.innerText = userData?.email ? userData.email : EMAIL_DEFAULT
  },
}
