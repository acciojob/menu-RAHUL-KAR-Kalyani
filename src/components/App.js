import React, { useState } from 'react';
import { dishes } from './Data';
import DishList from './components/DishList';
import CategoryButtons from './components/CategoryButtons';

const categories = ['all', ...new Set(dishes.map(dish => dish.category))];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filterCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredDishes = selectedCategory === 'all' 
    ? dishes 
    : dishes.filter(dish => dish.category === selectedCategory);

  return (
    <div className="app">
      <h1>Dish Menu</h1>
      <CategoryButtons categories={categories} filterCategory={filterCategory} />
      <DishList dishes={filteredDishes} />
    </div>
  );
};

export default App;
