const MainContainerRoot = () => {
  const container = document.getElementById('root-main')

  return {
    addComponent: ({ component }) => {
      console.log(component)
      container.appendChild(component)
    },
  }
}

module.exports = { MainContainerRoot }
