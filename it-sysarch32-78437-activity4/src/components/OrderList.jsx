import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OrderForm from './OrderForm';
import './OrderList.css'; 

function OrderList() {
  const [orders, setOrders] = useState([]);
  const [newOrderCreated, setNewOrderCreated] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/orders', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (Array.isArray(response.data.orders)) {
          setOrders(response.data.orders);
        } else {
          console.error('Invalid orders data:', response.data);
          setOrders([]);
        }
      } catch (error) {
        console.error('Fetch orders error:', error.response.data);
      }
    };
    fetchOrders();
  }, [newOrderCreated]);

  const handleOrderCreated = () => {
    setNewOrderCreated(!newOrderCreated);
  };

  return (
    <div className="order-list-container">
      <h2>Order List</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table className="order-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.product && order.product.name ? order.product.name : 'Not Available'}</td>
                <td>{order.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <OrderForm onOrderCreated={handleOrderCreated} />
    </div>
  );
}

export default OrderList;