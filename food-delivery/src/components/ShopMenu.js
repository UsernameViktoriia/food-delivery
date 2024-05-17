import React from "react";

function ShopMenu({ menuItems }) {
  return (
    <div className="shop-menu">
      {menuItems.map((item) => (
        <div key={item.id} className="menu-item">
          <img src={item.photo} alt={item.name} />
          <div className="item-details">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShopMenu;
