import React, { useState } from 'react';
import axios from 'axios';
import './CreateProduct.css'; // Import the CSS file for styles

const CreateProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const token = localStorage.getItem('token');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('productImage', image);

    try {
      const response = await axios.post(
        'http://localhost:3000/products/',
        formData
      );

      console.log(response.data);

      // Clear form fields
      setName('');
      setPrice('');
      setImage(null);
      setErrorMessage('');
    } catch (error) {
      console.error(error.response.data);
      setErrorMessage('Error adding product.');
    }
  };

  return (
    <div className="create-product-container">
      <div className="card">
        <h2>Add Product</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Price: </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Image:</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </div>
          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;