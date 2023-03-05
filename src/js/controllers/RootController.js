const root = document.querySelector('#root')

const RootMainContainer = ({ element }) => {
  root.innerHTML = ''
  root.appendChild(element)
}

module.exports = { RootMainContainer }
