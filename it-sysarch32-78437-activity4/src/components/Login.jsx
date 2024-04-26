import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulating login success
    setEmail('');
    setPassword('');

    try {
      const response = await axios.post(
        'http://localhost:3000/user/login',
        {
          email: email,
          password: password,
        }
      );

      // Get the token from the response
      const token = response.data.token;

      // Store the token in localStorage
      localStorage.setItem('token', token);

      // Set the authorization header for future requests
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // Show toast notification
      alert('Logged in successfully!', { autoClose: 3000 });

      // Navigate to dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error(error.response ? error.response.data : error);
      // Show toast notification for login error
      toast.error('Failed to log in. Please try again.', { autoClose: 3000 });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="input-field"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        className="input-field"
      />
      <button type="submit">Log In</button>
    </form>
  );
}

export default Login;