import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/user/signup', { email, password });
      console.log('Signup success', response.data);
      
      localStorage.setItem('token', response.data.token);

      toast.success('Sign up successful!', { autoClose: 3000 });
      navigate('/login');
    } catch (error) {
      console.error('Signup error', error.response.data);
  
      if (error.response.data.error === 'email_taken') {
        toast.error('Email is already registered. Please use a different email address.', { autoClose: 3000 });
      } else {
        toast.error('Sign up failed. Please try again.', { autoClose: 3000 });
      }
    }
  }

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
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;