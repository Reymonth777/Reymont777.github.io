document.getElementById('checkout-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (name && address && email && phone) {
        alert('Thank you for your purchase! Your order has been placed.');
        localStorage.removeItem('cart');
        window.location.href = 'index.html';
    } else {
        alert('Please fill in all fields.');
    }
});
