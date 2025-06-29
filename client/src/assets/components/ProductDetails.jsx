
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Button from 'react-bootstrap/Button';
import './ProductDetails.css'; // ⬅️ Make sure this file is created and imported
import products from '../data/ProductData'; // ✅ adjust path as needed
import { WishlistContext } from '../context/WishlistContext'; // adjust path if needed


function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-detail-wrapper">
      <div className="product-detail-container">
        <img
          src={product.img}
          alt={product.title}
          className="product-detail-image"
        />
        <div className="product-detail-info">
          <h2 className="product-detail-title">{product.title}</h2>
          <p className="product-detail-description">{product.text}</p>
          <div className="product-detail-price">${parseFloat(product.price.replace('$','')).toFixed(2)}</div>
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
          <Button variant="outline-secondary" onClick={() => addToWishlist(product)} style={{ marginLeft: '10px' }}>
  Add to Wishlist
</Button>

        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
