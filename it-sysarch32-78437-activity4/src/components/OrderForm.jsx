import React, { useState } from 'react';
import axios from 'axios';
import './OrderForm.css'; // Import the CSS file for styles

function OrderForm({ onOrderCreated }) {
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:3000/orders',
        { productId, quantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('Order created', response.data);
      alert('Order created successfully!');
      onOrderCreated(); // Trigger the update of the order list
    } catch (error) {
      console.error('Create order error', error.response.data);
      alert('Failed to create order');
    }
  };

  return (
    <div className="card-container">
      <div className="card">
        <div className="order-form-container">
          <form onSubmit={handleSubmit}>
            <h2>Create Order</h2>
            <input
              type="text"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              placeholder="Product ID"
              required
            />
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Quantity"
              min="1"
              required
            />
            <button type="submit">Create Order</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OrderForm;