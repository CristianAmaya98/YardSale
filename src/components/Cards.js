module.exports = {
  productCard: ({ name, image, price, ...values }, callback) => {
    const productContainer = document.createElement('div');
    productContainer.classList.add('product-card');

    const imageProduct = document.createElement('img');
    imageProduct.setAttribute('id', 'imageProduct');
    imageProduct.setAttribute('src', image);

    const productInfoContainer = document.createElement('div');
    productInfoContainer.classList.add('product-info');

    const productDivConainer = document.createElement('div');

    const priceProduct = document.createElement('p');
    priceProduct.innerText = `$ ${price}`;

    const nameProduct = document.createElement('p');
    nameProduct.innerText = name;

    productDivConainer.appendChild(priceProduct);
    productDivConainer.appendChild(nameProduct);
    productInfoContainer.appendChild(productDivConainer);

    const figureContainer = document.createElement('figure');

    const imageCartIcon = document.createElement('img');
    imageCartIcon.setAttribute('src', './assets/icons/bt_add_to_cart.svg');
    imageCartIcon.setAttribute('alt', 'carrito de compras');

    [figureContainer, imageProduct].forEach((element) => {
      element.addEventListener('click', () => {
        callback(element.getAttribute('id') !== 'imageProduct', {
          name,
          image,
          price,
          ...values,
        });
      });
    });
    figureContainer.appendChild(imageCartIcon);
    productInfoContainer.appendChild(figureContainer);

    productContainer.appendChild(imageProduct);
    productContainer.appendChild(productInfoContainer);
    return productContainer;
  },
  productShoppingCard: ({ name, image, price, ...values }) => {
    const shoppingContainer = document.createElement('div');
    shoppingContainer.classList.add('shopping-cart');

    const figureContainer = document.createElement('figure');

    const imageProduct = document.createElement('img');
    imageProduct.setAttribute('src', image);

    figureContainer.appendChild(imageProduct);
    shoppingContainer.appendChild(figureContainer);

    const priceProduct = document.createElement('p');
    priceProduct.innerText = `$ ${price}`;

    const nameProduct = document.createElement('p');
    nameProduct.innerText = name;

    shoppingContainer.appendChild(priceProduct);
    shoppingContainer.appendChild(nameProduct);

    const imageCartIcon = document.createElement('img');
    imageCartIcon.setAttribute('src', './assets/icons/icon_close.png');
    imageCartIcon.setAttribute('alt', 'close');
    shoppingContainer.appendChild(imageCartIcon);

    return shoppingContainer;
  },
};
