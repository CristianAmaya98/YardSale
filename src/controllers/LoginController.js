const { sectionLogin } = require('../components/SectionContainer')
const { UserLogin } = require('../models/User')
const {
  saveSectionUser,
  getEmailUser,
  validateSectionUser,
} = require('../services/UserService')
const desktopMenu = document.querySelector('.desktop-menu')
const navbarEmail = document.querySelector('.navbar-email')

module.exports = {
  login: () => {
    sectionLogin({
      onLogin: ({ email, password }) => {
        saveSectionUser({ user: new UserLogin({ email, password }) })
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
    navbarEmail.innerText = getEmailUser()
  },

  validateSection: () => {
    return validateSectionUser()
  },
}
