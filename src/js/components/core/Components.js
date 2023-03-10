function ComponentAttribute({ id, value }) {
  this.id = id
  this.value = value
}

function ComponentEvent({ event = '', callback = () => {} }) {
  this.event = event
  this.callback = callback
}

function _ComponentElement({
  element,
  attributes = [],
  children = [],
  text = '',
  events = [],
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

  if (events.length > 0) {
    events.forEach(({ event, callback }) => {
      elementHTML.addEventListener(event, (event) => {
        event.preventDefault()
        callback(event)
      })
    })
  }

  return elementHTML
}

function ComponentElementDiv({
  attributes = [],
  text = '',
  children = [],
  events = [],
}) {
  return new _ComponentElement({
    element: 'div',
    attributes,
    children,
    events,
    text,
  })
}

function ComponentElementP({
  attributes = [],
  text = '',
  events = [],
  children = [],
}) {
  return new _ComponentElement({
    element: 'p',
    attributes,
    text,
    events,
    children,
  })
}

function ComponentElementFigure({
  attributes = [],
  children = [],
  events = [],
}) {
  return new _ComponentElement({
    element: 'figure',
    attributes,
    children,
    events,
  })
}

function ComponentElementImage({
  attributes = [],
  urlImage = '',
  events = [],
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
    events,
  })
}

function ComponentElementForm({ attributes = [], children = [], events = [] }) {
  return new _ComponentElement({
    element: 'form',
    attributes,
    children,
    events,
  })
}

function ComponentElementLabel({
  forValue,
  text = '',
  attributes = [],
  children = [],
  events = [],
}) {
  return new _ComponentElement({
    element: 'label',
    text,
    attributes: [
      new ComponentAttribute({
        id: 'for',
        value: forValue,
      }),
      ...attributes,
    ],
    children,
    events,
  })
}

function ComponentElementInput({
  typeInput = 'text',
  placeHolder = '',
  idInput = '',
  attributes = [],
  events = [],
}) {
  return new _ComponentElement({
    element: 'input',
    attributes: [
      new ComponentAttribute({
        id: 'type',
        value: typeInput,
      }),
      new ComponentAttribute({
        id: 'id',
        value: idInput,
      }),
      new ComponentAttribute({
        id: 'placeholder',
        value: placeHolder,
      }),
      ...attributes,
    ],
    events,
  })
}

function ComponentElementInputSubmit({
  valueInput = '',
  attributes = [],
  events = [],
}) {
  return new _ComponentElement({
    element: 'input',
    attributes: [
      new ComponentAttribute({
        id: 'type',
        value: 'submit',
      }),

      new ComponentAttribute({
        id: 'value',
        value: valueInput,
      }),
      ...attributes,
    ],
    events,
  })
}

function ComponentElementLink({
  text = '',
  url = '/',
  attributes = [],
  events = [],
}) {
  return new _ComponentElement({
    element: 'a',
    text,
    attributes: [
      new ComponentAttribute({
        id: 'href',
        value: url,
      }),
      ...attributes,
    ],
    events,
  })
}

function ComponentElementButton({
  text = '',
  attributes = [],
  events = [],
  urlImage = '',
  attributesImage = [],
}) {
  return new _ComponentElement({
    element: 'button',
    text,
    attributes,
    events,
    children:
      urlImage !== ''
        ? [
            new ComponentElementImage({
              urlImage,
              attributes: [
                new ComponentAttribute({ id: 'alt', value: 'add to cart' }),
                ...attributesImage,
              ],
            }),
          ]
        : [],
  })
}

function ComponentElementLi({
  attributes = [],
  text = '',
  events = [],
  children = [],
}) {
  return new _ComponentElement({
    element: 'li',
    attributes,
    events,
    children,
    text,
  })
}

function ComponenteElementAside({
  attributes = [],
  events = [],
  children = [],
}) {
  return new _ComponentElement({
    element: 'aside',
    attributes,
    children,
    events,
  })
}

function ComponenteElementSpan({ attributes = [], text = '', events = [] }) {
  return new _ComponentElement({
    element: 'span',
    attributes,
    text,
    events,
  })
}

function ComponenteElementNav({ attributes = [], children = [], events = [] }) {
  return new _ComponentElement({
    element: 'nav',
    attributes,
    children,
    events,
  })
}

function ComponenteElementUl({ attributes = [], children = [], events = [] }) {
  return new _ComponentElement({
    element: 'ul',
    attributes,
    children,
    events,
  })
}

function ComponentElementSection({
  attributes = [],
  children = [],
  events = [],
}) {
  return new _ComponentElement({
    element: 'section',
    attributes,
    children,
    events,
  })
}

module.exports = {
  ComponentAttribute,
  ComponentEvent,
  ComponentElementDiv,
  ComponentElementP,
  ComponentElementFigure,
  ComponentElementImage,
  ComponentElementForm,
  ComponentElementLabel,
  ComponentElementInput,
  ComponentElementInputSubmit,
  ComponentElementLink,
  ComponentElementButton,
  ComponentElementLi,
  ComponenteElementAside,
  ComponenteElementSpan,
  ComponenteElementNav,
  ComponenteElementUl,
  ComponentElementSection,
}
