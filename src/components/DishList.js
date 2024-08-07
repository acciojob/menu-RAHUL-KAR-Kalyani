import React from 'react';
import DishCard from './DishCard';

const DishList = ({ dishes }) => {
  return (
    <div className="dish-list">
      {dishes.map(dish => (
        <DishCard key={dish.id} dish={dish} />
      ))}
    </div>
  );
};

export default DishList;
