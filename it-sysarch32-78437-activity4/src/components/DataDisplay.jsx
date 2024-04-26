import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataDisplay() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products');
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
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>Image</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <img src={`http://localhost:3000/${product.productImage}`} alt={product.name} style={{ width: '100px' }} />
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{product.name}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataDisplay;