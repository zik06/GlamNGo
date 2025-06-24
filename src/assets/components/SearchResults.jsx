import React from 'react';
import { useLocation } from 'react-router-dom';
import products from '../data/ProductData'; // adjust path

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery();
  const searchTerm = query.get('query')?.toLowerCase() || '';

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm)
  );

  if (!searchTerm) {
    return <p>Please enter a search term.</p>;
  }

  if (filteredProducts.length === 0) {
    return <p>No products found matching "{searchTerm}".</p>;
  }

  return (
    <div style={{ maxWidth: '900px', margin: '60px auto', padding: '20px' }}>
      <h2>Search results for "{searchTerm}":</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredProducts.map(product => (
          <li key={product.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
            <img src={product.img} alt={product.title} style={{ width: '80px', marginRight: '15px' }} />
            <strong>{product.title}</strong> — ${product.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
