// JavaScript Code for Checkout
document.getElementById('checkout-form').addEventListener('submit', checkout);

function checkout(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;

  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  if (cartItems.length === 0) {
    alert('Your cart is empty!');
    return;
  }

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  // Display the checkout details
  alert(`
    Thank you for your purchase, ${name}!
    Total amount: $${totalAmount.toFixed(2)}
    Shipping address: ${address}
    We will send an email to ${email} with the order confirmation.
  `);

  // Clear the cart and redirect to the home page
  localStorage.removeItem('cart');
  window.location.href = 'cart.html';
}
