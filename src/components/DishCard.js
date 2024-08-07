import React from 'react';

const DishCard = ({ dish }) => {
  return (
    <div className="dish-card">
      <img src={dish.img} alt={dish.title} height={200} width={200}/>
      <h3>{dish.title}</h3>
      <p>{dish.desc}</p>
      <p>Price: ${dish.price.toFixed(2)}</p>
    </div>
  );
};

export default DishCard;
