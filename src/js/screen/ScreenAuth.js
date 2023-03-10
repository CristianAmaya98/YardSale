const login = function () {
  window.location.href = '#/home'
}

const reset = function () {
  window.location.href = '#/resetPassword'
}

const registrer = function () {
  window.location.href = '#/registerUser'
}

module.exports = function ({ data }) {
  const loginContainer = document.createElement('div')
  loginContainer.classList.add('login')

  loginContainer.innerHTML = `
        <div class="login__contenido">
            <img src="./assets/logos/logo_yard_sale.svg" alt="logo" class="login__logo">

            <form class="formulario">
                <label for="email" class="formulario__label">Email address</label>
                <input type="text" id="email" placeholder="platzi@example.cm"
                    class="formulario__input formulario__input--email">

                <label for="password" class="formulario__label">Password</label>
                <input type="password" id="password" placeholder="*********"
                    class="formulario__input formulario__input--password">

                <input type="submit" value="Log in" class="formulario__submit" data-event='login'>
                <a href="/" class="formulario__reset-password" data-event='reset'>Forgot my password</a>
            </form>

            <button class="login__button" data-event='registrer'>Sign up</button>
        </div>`

  loginContainer
    .querySelector('.login__contenido')
    .addEventListener('click', (event) => {
      event.preventDefault()
      const events = {
        login,
        reset,
        registrer,
      }
      events[event.target.getAttribute('data-event')]()
    })

  return loginContainer
}
