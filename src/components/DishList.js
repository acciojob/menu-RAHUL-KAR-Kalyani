// Example in DishList component
const DishList = ({ dishes }) => {
    return (
      <div id="main" className="dish-list">
        <button id="filter-btn-1">Breakfast</button>
        <button id="filter-btn-2">Lunch</button>
        <button id="filter-btn-3">Shakes</button>
        {dishes.map(dish => (
          <div key={dish.id} className="dish-card">
            <img src={dish.img} alt={dish.title} />
            <h3>{dish.title}</h3>
            <p>{dish.desc}</p>
            <p>Price: ${dish.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    );
  };
  