import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <Router>
      <div>
        <Routes> {}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {}
          <Route path="/" element={
            <div>
              <h1>Welcome to My App</h1>
              <p><a href="/signup">Sign Up</a> | <a href="/login">Log In</a></p>
            </div>
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;