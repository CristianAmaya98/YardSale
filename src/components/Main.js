const MainContainerRoot = ({ root }) => {
  const container = document.getElementById(root)

  return {
    cleanContainer: () => {
      container.innerHTML = ''
    },

    addComponents: ({ components = [] }) => {
      if (components?.length === 0) return

      for (const component of components) {
        console.log(component)
        container.appendChild(component)
      }

      console.log(container)
    },
    addComponent: ({ component }) => {
      container.appendChild(component)
    },
    removeComponent: ({ component }) => {
      container.removeChild(component)
    },
  }
}

module.exports = { MainContainerRoot }
