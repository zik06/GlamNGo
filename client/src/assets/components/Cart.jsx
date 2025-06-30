import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Button from 'react-bootstrap/Button';
import './Cart.css'; // Ensure you have a Cart.css file for styling
import { Link } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart, buyNow, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const cleanPrice = (price) => {
  if (!price) return 0;
  const cleaned = String(price).replace(/[^\d.]/g, ''); // remove ₹ or commas
  return parseFloat(cleaned) || 0;
};

  const totalPrice = cartItems.reduce((acc, item) => {
  const price = cleanPrice(item.price);
  return acc + price * (item.quantity || 1);
}, 0);


  if (cartItems.length === 0) {
    return <div style={{ textAlign: 'center', marginTop: '60px' }}><h3>Your cart is empty</h3></div>;
  }

  return (
    <div className="cart-wrapper" style={{ maxWidth: '900px', margin: '60px auto', padding: '20px' }}>
      <h2>Your Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item d-flex justify-content-between align-items-center mb-3 p-3 border rounded">
          <div className="d-flex align-items-center gap-3">
            <img src={item.img} alt={item.title} style={{ width: '80px', borderRadius: '8px' }} />
            <div>
              <h5>{item.title}</h5>
              <p>{item.price}</p>
              <div className="quantity-controls d-flex align-items-center gap-2 mt-2">
                <Button variant="secondary" size="sm" onClick={() => decreaseQuantity(item.id)}>-</Button>
                <span>{item.quantity || 1}</span>
                <Button variant="secondary" size="sm" onClick={() => increaseQuantity(item.id)}>+</Button>
              </div>
            </div>
          </div>
          <Button variant="danger" onClick={() => removeFromCart(item.id)}>Remove</Button>
        </div>
      ))}
      <hr />
      <h4>Total: ${totalPrice.toFixed(2)}</h4>
      <Button variant="secondary" onClick={buyNow} className="mt-3">
        <Link to = "/buy"  state={{ cartItems }} className="text-white text-decoration-none">Buy Now</Link>
      </Button>
    </div>
  );
}

export default Cart;
