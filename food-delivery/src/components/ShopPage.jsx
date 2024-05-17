// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import ShopMenu from "./ShopMenu";

// function ShopPage() {
//   const [shops, setShops] = useState([]);
//   const [currentShop, setCurrentShop] = useState(null);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/shops") // Assuming backend runs on port 3000
//       .then((response) => setShops(response.data))
//       .catch((error) => console.error("Error fetching shops:", error));
//   }, []);

//   const handleShopClick = (shopId) => {
//     axios
//       .get(`http://localhost:3000/shops/${shopId}/menu`)
//       .then((response) => setCurrentShop(response.data))
//       .catch((error) =>
//         console.error(`Error fetching shop menu for ${shopId}:`, error)
//       );
//   };

//   return (
//     <div className="shop-page">
//       <div className="shop-menu-list">
//         <h2>Shops:</h2>
//         <ul>
//           {shops.map((shop) => (
//             <li key={shop.id}>
//               <button onClick={() => handleShopClick(shop.id)}>
//                 {shop.name}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="shop-content">
//         {currentShop && <ShopMenu menuItems={currentShop.menu} />}
//       </div>
//     </div>
//   );
// }

// export default ShopPage;
// src/components/ShopPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

function ShopPage() {
  const [shops, setShops] = useState([]);
  const [currentShop, setCurrentShop] = useState(null);

  useEffect(() => {
    // Fetch shops data from JSON file
    axios
      .get("../data/shops.json")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setShops(response.data);
        } else {
          console.error("Shops data is not an array:", response.data);
        }
      })
      .catch((error) => console.error("Error fetching shops:", error));
  }, []);

  const handleShopClick = (shopId) => {
    // Fetch menu data for the selected shop from JSON file
    axios
      .get(`/data/menu.json`)
      .then((response) => setCurrentShop(response.data[shopId]))
      .catch((error) =>
        console.error(`Error fetching shop menu for ${shopId}:`, error)
      );
  };

  return (
    <div className="shop-page">
      <div className="shop-menu-list">
        <h2>Shops:</h2>
        <ul>
          {Object.values(shops).map((shop) => (
            <li key={shop.id}>
              <button onClick={() => handleShopClick(shop.id)}>
                {shop.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="shop-content">
        {currentShop && (
          <div className="shop-menu">
            {currentShop.map((item) => (
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
        )}
      </div>
    </div>
  );
}

export default ShopPage;
