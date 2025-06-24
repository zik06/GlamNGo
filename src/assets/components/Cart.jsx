import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Button from 'react-bootstrap/Button';
import './Cart.css'; // Ensure you have a Cart.css file for styling

function Cart() {
  const { cartItems, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

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
              <p>${item.price.toFixed(2)}</p>
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
      <Button variant="secondary" onClick={clearCart} className="mt-3">
        Clear Cart
      </Button>
    </div>
  );
}

export default Cart;
