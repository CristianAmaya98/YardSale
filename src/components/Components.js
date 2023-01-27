function ComponentAttribute({ id, value }) {
  this.id = id
  this.value = value
}

function _ComponentElement({
  element,
  attributes = [],
  children = [],
  text = '',
  onClick,
}) {
  const elementHTML = document.createElement(element)
  if (attributes.length > 0) {
    attributes.forEach((attribute) => {
      if (attribute instanceof ComponentAttribute) {
        const { id, value } = attribute
        elementHTML.setAttribute(id, value)
      }
    })
  }

  if (text !== '') {
    elementHTML.innerText = text
  }

  if (children.length > 0) {
    children.forEach((child) => {
      elementHTML.appendChild(child)
    })
  }

  if (onClick) {
    elementHTML.addEventListener('click', onClick)
  }

  return elementHTML
}

function ComponentElementDiv({ attributes, children, onClick = undefined }) {
  return new _ComponentElement({
    element: 'div',
    attributes,
    children,
    onClick,
  })
}

function ComponentElementP({ attributes, text = '', onClick = undefined }) {
  return new _ComponentElement({
    element: 'p',
    attributes,
    text,
    onClick,
  })
}

function ComponentElementFigure({ attributes, children, onClick = undefined }) {
  return new _ComponentElement({
    element: 'figure',
    attributes,
    children,
    onClick,
  })
}

function ComponentElementImage({
  attributes,
  urlImage = '',
  onClick = undefined,
}) {
  return new _ComponentElement({
    element: 'img',
    attributes: [
      ...attributes,
      new ComponentAttribute({
        id: 'src',
        value: urlImage,
      }),
    ],
    onClick,
  })
}

module.exports = {
  ComponentAttribute,
  ComponentElementDiv,
  ComponentElementP,
  ComponentElementFigure,
  ComponentElementImage,
}
