const root = document.querySelector('#root')

const RootMainContainer = ({ element }) => {
  cleanChildren()
  root.appendChild(element)
}

const cleanChildren = () => {
  while (root.firstChild) {
    root.removeChild(root.firstChild)
  }
}

module.exports = { RootMainContainer }
