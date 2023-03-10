const {
  getAllProductShopping,
  onCleanShopping,
  onPayShopping,
} = require('../controllers/ShoppingCartController')

const shoppingMenuContainer = function ({ text, menus = [] }) {
  return `
        <div class="shopping-my-cart__menu">
          <h3 class="shopping-my-cart__title-menu">${text}</h3>
          <ul class="shopping-my-cart__contenido-menu">
              ${menus
                .map(
                  (menu) =>
                    `<li class="shopping-my-cart__item-menu">${menu}</li>`
                )
                .join('')}
          </ul>
        </div>`
}

const shoppingHeaderContainer = function ({ image, title }) {
  return `
        <div class="shopping-my-cart__title-container">
            <img class="shopping-my-cart__imagen" src="${image}" alt="imagen shopping back">
            <p class="shopping-my-cart__title">${title}</p>
        </div>`
}

const shoppingProducts = function ({ productCart = [], textAlternative }) {
  return productCart.length === 0
    ? `<div>${textAlternative}</div>`
    : productCart
        .map(({ image, name, price }) => {
          return `
                <div class="shopping-cart">
                        <img class="shopping-cart__imagen"
                            src="${image}"
                            alt="bike">
                        <p class="shopping-cart__title">${name}</p>
                        <p class="shopping-cart__price">${Number(
                          price
                        ).toLocaleString('es-CO')}</p>
                </div>
            `
        })
        .join('')
}

const shoppingTotalProducts = function ({ productCart }) {
  return `
    <div class="order">
        <span class="order__title">Total</span>
        <p class="order__price">$
        ${Number(
          productCart.length === 0
            ? '0'
            : productCart.reduce((total, { price }) => total + Number(price), 0)
        ).toLocaleString()} </p>
    </div>`
}

const renderHTMLShoppingCart = (productCart = []) => {
  return `
    ${shoppingHeaderContainer({
      image: './assets/icons/flechita.svg',
      title: 'Mi Carrito de Compras',
    })}

<div class="shopping-my-cart__grid">
    ${shoppingMenuContainer({
      text: 'Menu',
      menus: ['Lista de Deseos', 'Favoritos', 'Compras para Despues'],
    })}
   

    <div class="shopping-my-cart__pay-contenido">
        <div class="shoppings">
          ${shoppingProducts({
            productCart,
            textAlternative: 'Carrito de Compras Vacio',
          })}
        </div>
    </div>

    <div class="shopping-my-cart__pay">
        ${shoppingTotalProducts({ productCart })}

        <div class="buttons-pay">
            <button id="btn-clean" class="button button--primary">
            Limpiar Carrito
            </button>
            <button id="btn-pay" class="button">
                Continuar Compra
            </button>
        </div>

    </div>
</div>
`
}

module.exports = function ({ data }) {
  const productCart = getAllProductShopping()

  const shoppingContainer = document.createElement('div')
  shoppingContainer.setAttribute('class', 'shopping-my-cart')

  shoppingContainer.innerHTML = renderHTMLShoppingCart(productCart)

  // shoppingContainer
  //   .querySelector('#btn-clean')
  //   .addEventListener('click', onCleanShopping())

  // shoppingContainer
  //   .querySelector('#btn-pay')
  //   .addEventListener('click', onPayShopping())

  return shoppingContainer
}
