const getAmountUnit = (product, limit) => {
  let options = ''

  for (let index = 0; index < product?.info?.amount; index++) {
    if (index + 1 === limit) {
      break
    }
    options += `<option value="${index + 1}">${index + 1} Unidad</option>`
  }
  if (product?.info?.amount > 6) {
    options += '<option value="+">Más 6 Unidades</option>'
  }
  return options
}

const screenDetailProduct = ({ product }) => {
  return `<div class="detail__grid">
    <div class="detail__contenido-img">
    <img class="detail__image"
        src="${product.product?.image}"
        alt="">
    </div>
    <div class="detail__description">
    <h2 class="detail__title">${product.product?.name}</h2>
    <span class="detail__price">$ 396.900</span>

    <p>${
      product?.available ? 'Producto Disponible' : 'Producto No Disponible'
    }</p>

    <form action="" class="formulario">
        <div class="formulario__campo formulario__campo--half">
        <label for="color" class="formulario__label">Color: </label>
        <select class="formulario__input   formulario__input--select"  id="color">
            <option value="" selected disabled>-- Selccione un Color --</option>
            ${product?.info.colors
              .map((color) => `<option value="${color}">${color}</option>`)
              .join('')}
        </select>
        </div>


        <div class="formulario__campo formulario__campo--half">
        <label class="formulario__label" for="cantidad">Cantidad: </label>
        <select class="formulario__input formulario__input--select"  id="cantidad">
        ${getAmountUnit(product, 7)}
        </select>
        </div>
        
        <div class="formulario__campo formulario__campo--flex-row">
            <input class="formulario__submit formulario__submit--pay" type="submit" value="Comprar ahora" ${
              product?.available ? '' : 'disabled'
            } />
            <input class="formulario__submit formulario__submit--add" type="submit" value="Agregar al carrito" ${
              product?.available ? '' : 'disabled'
            } />
        </div>

    </form>
    </div>

    <div class="characteristic">
    <h3 class="characteristic__title">Descripción</h3>
    <p class="characteristic__text">${product?.info?.description}</p>
    <div class="detail-product">
        <h3 class="detail-product__title">Características del producto</h3>

        <div class="characteristics">

        ${product.characteristics
          .map(({ title, data }) => {
            return `
                <div class="characteristics__contenido">
                    <h3 class="characteristics__title">${title}</h3>
                    <ul class="characteristics__detail">
                        ${data
                          .map(
                            ({ item, value }) => `
                                <li class="characteristics__item">
                                    ${item}<span class="characteristics__value">${value}</span>
                                </li>`
                          )
                          .join('')}
                    </ul>
                </div>`
          })
          .join('')}
    </div>
    </div>
    </div>
</div>`
}

module.exports = { screenDetailProduct }
