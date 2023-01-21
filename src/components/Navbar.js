module.exports = {
  navbarItem: ({ name }) => {
    const container = document.createElement('li')
    const aLinkReferente = document.createElement('a')
    aLinkReferente.setAttribute('href', '/')
    aLinkReferente.innerText = name
    container.appendChild(aLinkReferente)
    return container
  },
}
