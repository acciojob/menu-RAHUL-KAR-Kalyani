import React from 'react';

const CategoryButtons = ({ categories, filterCategory }) => {
  return (
    <div className="category-buttons">
      {categories.map((category, index) => (
        <button key={index} onClick={() => filterCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
