import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import OrderList from './components/OrderList';
import Navbar from './components/Navbar'; // Import the Navbar component

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Add the Navbar component */}
        <Routes>
          <Route
            path="/signup"
            element={
              <div className="center">
                <h1>Welcome to My App</h1>
                <h2>Sign Up</h2>
                <SignUp />
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div className="center">
                <h1>Welcome to My App</h1>
                <h2>Log In</h2>
                <Login />
              </div>
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<OrderList />} />
          <Route
            path="/"
            element={
              <div className="center">
                <h1>Welcome to My App</h1>
                <Link to="/login" style={{ textDecoration: 'none', margin: '10px' }}>
                  <button className="button">Log In</button>
                </Link>
                <Link to="/signup" style={{ textDecoration: 'none', margin: '10px' }}>
                  <button className="button">Sign Up</button>
                </Link>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;