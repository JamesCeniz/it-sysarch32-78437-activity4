import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DataDisplay from './DataDisplay';
import CreateProduct from './CreateProduct';
import './Dashboard.css';
import axios from 'axios';

function Dashboard() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleViewOrders = () => {
    navigate('/orders');
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="dashboard-content">
        <DataDisplay />
        <CreateProduct />
      </div>
    </div>
  );
}

export default Dashboard;