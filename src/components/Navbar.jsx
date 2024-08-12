import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="search-bar">
          <input type="text" placeholder="Search products and categories" />
          <button>Search</button>
        </div>
        <div className="nav-links">
          <a href="#">Gaming</a>
          <a href="#">Shoes</a>
          <a href="#">Electronics</a>
          <a href="#">Clothes</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
