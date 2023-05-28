// JavaScript Code
const addToCartButtons = document.getElementsByClassName('add-to-cart-btn');
for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener('click', addToCart);
}

function addToCart() {
  const productName = this.getAttribute('data-name');
  const productPrice = parseFloat(this.getAttribute('data-price'));
  const productImageSrc = this.parentNode.querySelector('img').src;
  const item = {
    name: productName,
    price: productPrice,
    image: productImageSrc
  };

  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));

  alert('Item added to cart!');
}

const categoryLinks = document.getElementsByClassName('category-link');
for (let i = 0; i < categoryLinks.length; i++) {
  categoryLinks[i].addEventListener('click', filterProducts);
}

function filterProducts(e) {
  e.preventDefault();
  const category = this.getAttribute('data-category');

  const products = document.getElementsByClassName('product');
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    if (category === 'all' || product.getAttribute('data-category') === category) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  }
}
