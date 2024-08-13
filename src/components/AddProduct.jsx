import React, { useState } from 'react';
import axios from 'axios';//A library for addtocart logo

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    category: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/products', formData)
      .then(response => {
        console.log(response.data);
        setFormData({
          name: '',
          description: '',
          price: '',
          image: '',
          category: ''
        });
      });
  };

  return (
    <form onSubmit={handleSubmit} className="add-product-form">
      <label htmlFor="name">Product Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        required
        autoComplete="off"
      />

      <label htmlFor="description">Product Description:</label>
      <textarea
        id="description"
        name="description"
        placeholder="Product Description"
        value={formData.description}
        onChange={handleChange}
        required
        autoComplete="off"
      />

      <label htmlFor="price">Price:</label>
      <input
        type="number"
        id="price"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
        autoComplete="off"
      />

      <label htmlFor="image">Image URL:</label>
      <input
        type="text"
        id="image"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
        required
        autoComplete="off"
      />

      <label htmlFor="category">Category:</label>
      <input
        type="text"
        id="category"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
        autoComplete="off"
      />

      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;