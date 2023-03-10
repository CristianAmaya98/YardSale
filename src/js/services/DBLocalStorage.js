module.exports = {
  saveProductsStorage: function ({ key, data }) {
    if (key && data) {
      localStorage.setItem(key, JSON.stringify(data))
    }
  },
  findAllStorage: function ({ key }) {
    if (key) {
      console.log(localStorage.getItem(key))
      return JSON.parse(localStorage.getItem(key))
    }
  },
  deleteAllStorage: function ({ key }) {
    if (key) {
      localStorage.removeItem(key)
    }
  },
}
