module.exports = {
  addData: ({ key, data }) => {
    localStorage.setItem(key, JSON.stringify(data))
    return localStorage.getItem(key).length
  },
  getData: ({ key }) => {
    return localStorage.getItem(key)
  },

  removeData: ({ key }) => {
    return localStorage.removeItem(key)
  },

  KINDSTORAGE: {
    SHOPPING: 'shopping',
    USER: 'user',
  },
}
