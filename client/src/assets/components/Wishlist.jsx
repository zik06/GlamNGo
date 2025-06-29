
import React, { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';
import { Link } from 'react-router-dom';
import './Wishlist.css'; // Optional: for styling

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useContext(WishlistContext);

  return (
    <div className="wishlist-container">
      <h2>Your Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty. <Link to="/">Go shopping</Link>.</p>
      ) : (
        <>
          <button className="clear-btn" onClick={clearWishlist}>Clear Wishlist</button>
          <div className="wishlist-grid">
            {wishlistItems.map((item) => (
              <div key={item.id} className="wishlist-card">
                <img src={item.img} alt={item.name} className="wishlist-image" />
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
                <Link to={`/product/${item.id}`}>View Details</Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Wishlist;
