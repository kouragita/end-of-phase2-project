import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="app">
      {/* <Navbar /> */}
      <ProductList />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
