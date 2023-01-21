const imageProduct = document.getElementById('image-product');
const priceProduct = document.getElementById('price-product');
const nameProduct = document.getElementById('name-product');
const descriptionProduct = document.getElementById('description-product');
module.exports = {
  detailProduct: ({ name, image, price, description }) => {
    imageProduct.setAttribute('src', image);
    priceProduct.innerText = `$ ${price}`;
    nameProduct.innerText = name;
    descriptionProduct.innerText = description;
  },
};

/*
 <div class="product-detail-article-close">
      <img src="./assets/icons/icon_close.png" alt="close">
    </div>
    <img
      src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="bike">

    <div class="product-detail-article-info">
      <p>$35,00</p>
      <p>Bike</p>
      <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
      <button class="primary-button add-to-cart-button">
        <img src="./assets/icons/bt_add_to_cart.svg" alt="add to cart">
        Add to cart
      </button>
    </div>
*/
