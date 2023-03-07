const screenShoppingProduct = (productCart = []) => {
  const shoppingContainer = document.createElement('div')
  shoppingContainer.setAttribute('class', 'shopping-my-cart')

  shoppingContainer.innerHTML = `
<div class="shopping-my-cart__title-container">
    <img class="shopping-my-cart__imagen" src="./assets/icons/flechita.svg" alt="arrow">
    <p class="shopping-my-cart__title">Mi Carrito de Compras</p>
</div>

<div class="shopping-my-cart__grid">
    <div class="shopping-my-cart__menu">
    <h3 class="shopping-my-cart__title-menu">Menu</h3>
    <ul class="shopping-my-cart__contenido-menu">
        <li class="shopping-my-cart__item-menu">Lista de Deseos</li>
        <li class="shopping-my-cart__item-menu">Favoritos</li>
        <li class="shopping-my-cart__item-menu">Compras para Despues</li>
    </ul>
    </div>

    <div class="shopping-my-cart__pay-contenido">

    <div class="shoppings">

     ${productCart
       .map(({ image, name, price }) => {
         return `
        <div class="shopping-cart">
                <img class="shopping-cart__imagen"
                    src="${image}"
                    alt="bike">
                <p class="shopping-cart__title">${name}</p>
                <p class="shopping-cart__price">${Number(price).toLocaleString(
                  'es-CO'
                )}</p>
        </div>
        `
       })
       .join('')}
       
        </div>
    </div>

    <div class="shopping-my-cart__pay">
    <div class="order">
        <span class="order__title">Total</span>
        <p class="order__price">$ ${Number(
          productCart.reduce((total, { price }) => total + Number(price), 0)
        ).toLocaleString()} </p>
    </div>

    <div class="buttons-pay">
        <button class="button button--primary">
        Limpiar Carrito
        </button>
        <button class="button">
        Continuar Compra
        </button>
    </div>

    </div>
</div>
`

  return shoppingContainer
}

module.exports = { screenShoppingProduct }
