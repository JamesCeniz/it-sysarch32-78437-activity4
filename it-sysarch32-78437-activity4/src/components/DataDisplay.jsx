import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataDisplay() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/products');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Fetch products error', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: '10px' }}>
            <img src={`http://localhost:3001/${product.productImage}`} alt={product.name} style={{ width: '100px' }} />
            <span style={{ marginLeft: '10px' }}>{product.name}</span>
            <span style={{ marginLeft: '10px' }}>- ${product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataDisplay;