const {
  ComponentElementDiv,
  ComponentAttribute,
  ComponentElementImage,
  ComponentElementForm,
  ComponentElementLabel,
  ComponentElementInput,
  ComponentElementInputSubmit,
  ComponentElementLink,
  ComponentElementButton,
  ComponentEvent,
} = require('./core/Components')

const mainContainer = document.querySelector('.main-container')

module.exports = {
  sectionProducts: () => {
    const cardsContainer = new ComponentElementDiv({
      attributes: [
        new ComponentAttribute({
          id: 'class',
          value: 'cards-container',
        }),
      ],
    })
    mainContainer.appendChild(cardsContainer)
    return cardsContainer
  },

  cleanMainContainer: () => {
    mainContainer.innerHTML = ''
  },
  sectionLogin: ({
    onLogin = () => {},
    onForgotPassword = () => {},
    onSignUp = () => {},
  }) => {
    const loginContainer = new ComponentElementDiv({
      attributes: [
        new ComponentAttribute({
          id: 'class',
          value: 'login',
        }),
      ],
      children: [
        new ComponentElementDiv({
          attributes: [
            new ComponentAttribute({
              id: 'class',
              value: 'form-container',
            }),
          ],

          children: [
            new ComponentElementImage({
              urlImage: './assets/logos/logo_yard_sale.svg',
              attributes: [
                new ComponentAttribute({
                  id: 'class',
                  value: 'logo',
                }),
              ],
            }),

            new ComponentElementForm({
              attributes: [
                new ComponentAttribute({
                  id: 'class',
                  value: 'form',
                }),
              ],
              events: [
                new ComponentEvent({
                  event: 'submit',
                  callback: (event) => {
                    if (!event.target) return

                    const email = event.target[0]?.value
                    const password = event.target[1]?.value

                    if (email && password) {
                      onLogin({ email, password })
                    }
                  },
                }),
              ],
              children: [
                new ComponentElementLabel({
                  forValue: 'email',
                  text: 'Email address',
                  attributes: [
                    new ComponentAttribute({
                      id: 'class',
                      value: 'label',
                    }),
                  ],
                }),

                new ComponentElementInput({
                  idInput: 'email',
                  placeHolder: 'user@example.com',
                  attributes: [
                    new ComponentAttribute({
                      id: 'class',
                      value: 'input input-email',
                    }),
                  ],
                }),

                new ComponentElementLabel({
                  forValue: 'password',
                  text: 'Password',
                  attributes: [
                    new ComponentAttribute({
                      id: 'class',
                      value: 'label',
                    }),
                  ],
                }),

                new ComponentElementInput({
                  idInput: 'password',
                  typeInput: 'password',
                  placeHolder: '*********',
                  attributes: [
                    new ComponentAttribute({
                      id: 'class',
                      value: 'input input-password',
                    }),
                  ],
                }),

                new ComponentElementInputSubmit({
                  valueInput: 'Log in',
                  attributes: [
                    new ComponentAttribute({
                      id: 'class',
                      value: 'primary-button login-button',
                    }),
                  ],
                }),

                new ComponentElementLink({
                  text: 'Forgot my password',
                  events: [
                    new ComponentEvent({
                      event: 'click',
                      callback: (event) => {
                        onForgotPassword()
                      },
                    }),
                  ],
                }),
              ],
            }),

            new ComponentElementButton({
              text: 'Sign up',
              attributes: [
                new ComponentAttribute({
                  id: 'class',
                  value: 'secondary-button signup-button',
                }),
              ],
              events: [
                new ComponentEvent({
                  event: 'click',
                  callback: (event) => {
                    onSignUp()
                  },
                }),
              ],
            }),
          ],
        }),
      ],
    })
    mainContainer.innerHTML = ''
    mainContainer.appendChild(loginContainer)
  },
}
