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


      const token = response.data.token;

      localStorage.setItem('token', token);


      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      alert('Logged in successfully!', { autoClose: 3000 });

    
      navigate('/dashboard');
    } catch (error) {
      console.error(error.response ? error.response.data : error);
  
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