const { v4: uuidv4 } = require('uuid')

module.exports = {
  generator: () => {
    return uuidv4()
  },
}
