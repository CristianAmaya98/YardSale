const {
  ComponentElementSection,
  ComponentAttribute,
} = require('./core/Components')

const SectionProduct = () => {
  return {
    show: ({ childrenComponents = [] }) => {
      return new ComponentElementSection({
        attributes: [
          new ComponentAttribute({
            id: 'class',
            value: 'main-container',
          }),
        ],
        children: childrenComponents,
      })
    },
  }
}

module.exports = { SectionProduct }
