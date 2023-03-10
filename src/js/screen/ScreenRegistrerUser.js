module.exports = function (data) {
  const loginContainer = document.createElement('div')
  loginContainer.classList.add('login')
  loginContainer.innerHTML = `
<div class="login__contenido">
    <h1 class="title">Crear una Cuenta.</h1>

    <form action="/" class="formulario">
        <label for="name" class="formulario__label">Name</label>
        <input type="text" id="name" placeholder="Teff" class="formulario__input ">

        <label for="email" class="formulario__label">Email</label>
        <input type="text" id="email" placeholder="user@example.com" class="formulario__input formulario__input--password">

        <label for="password" class="formulario__label">Password</label>
        <input type="password" id="password" placeholder="*********" class="formulario__input formulario__input--password">

        <input type="submit" value="Create" class="formulario__submit">
    </form>
</div>`

  return loginContainer
}
