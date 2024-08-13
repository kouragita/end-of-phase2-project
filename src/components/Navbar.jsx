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
          <a href="#">All</a>
          <a href="#">Cart</a>
          <div className="dropdown">
            <button className="dropdown-btn">More <i className="fas fa-caret-down"></i></button>
            <div className="dropdown-content">
              <a href="#">Shoes</a>
              <a href="#">Gaming</a>
              <a href="#">Clothes</a>
              <a href="#">Electronics</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;