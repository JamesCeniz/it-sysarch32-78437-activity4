import React from 'react';
import { Link } from 'react-router-dom';
import DataDisplay from './DataDisplay'; 
import OrderForm from './OrderForm';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <DataDisplay />
      <OrderForm />
      <Link to="/create-product">Create Product</Link> | <Link to="/orders">View Orders</Link>
    </div>
  );
}

export default Dashboard;