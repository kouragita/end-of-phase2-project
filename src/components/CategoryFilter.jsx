import React from 'react';

const CategoryFilter = ({ categories, onCategoryChange, selectedCategory }) => {
  return (
    <div className="category-filter">
      <h3>Filter by Category</h3>
      <select onChange={(e) => onCategoryChange(e.target.value)} value={selectedCategory}>
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;