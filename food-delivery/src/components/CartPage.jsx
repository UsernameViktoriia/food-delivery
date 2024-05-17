// // src/components/CartPage.js
// import React, { useState } from "react";

// function CartPage() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [cartItems, setCartItems] = useState([]);

//   const handleItemChange = (itemId, newQuantity) => {
//     const updatedCart = cartItems.map((item) =>
//       item.id === itemId ? { ...item, quantity: newQuantity } : item
//     );
//     setCartItems(updatedCart);
//   };

//   const handleItemDelete = (itemId) => {
//     const updatedCart = cartItems.filter((item) => item.id !== itemId);
//     setCartItems(updatedCart);
//   };

//   const handleSubmitOrder = () => {
//     const order = {
//       name,
//       email,
//       phone,
//       address,
//       items: cartItems,
//       total: cartItems.reduce(
//         (total, item) => total + item.price * item.quantity,
//         0
//       ),
//     };
//     // Send order to backend for saving
//     console.log("Submitting order:", order);
//     // axios.post('http://localhost:3000/orders', order)
//     //     .then(response => console.log('Order submitted:', response.data))
//     //     .catch(error => console.error('Error submitting order:', error));
//   };

//   return (
//     <div className="cart-page">
//       <div className="checkout-form">
//         <h2>Checkout</h2>
//         <label>Name:</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <label>Phone:</label>
//         <input
//           type="tel"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//         />
//         <label>Address:</label>
//         <textarea
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//         ></textarea>
//       </div>
//       <div className="cart-items">
//         <h2>Shopping Cart</h2>
//         {cartItems.map((item) => (
//           <div key={item.id} className="cart-item">
//             <img src={item.photo} alt={item.name} />
//             <div className="item-details">
//               <h3>{item.name}</h3>
//               <p>Price: ${item.price}</p>
//               <label>Quantity:</label>
//               <input
//                 type="number"
//                 value={item.quantity}
//                 onChange={(e) =>
//                   handleItemChange(item.id, parseInt(e.target.value))
//                 }
//               />
//               <button onClick={() => handleItemDelete(item.id)}>Delete</button>
//             </div>
//           </div>
//         ))}
//         <div className="total">
//           <h3>
//             Total: $
//             {cartItems.reduce(
//               (total, item) => total + item.price * item.quantity,
//               0
//             )}
//           </h3>
//           <button onClick={handleSubmitOrder}>Submit Order</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CartPage;

// src/components/CartPage.jsx
import React, { useState } from "react";
import menuData from "../data/menu.json";

function CartPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [cartItems, setCartItems] = useState([]);

  // Load default cart items for testing
  useState(() => {
    const defaultCartItems = [
      {
        id: 1,
        name: "Big Mac",
        price: 5.99,
        quantity: 1,
        photo: menuData["1"][0].photo,
      },
      {
        id: 4,
        name: "Original Recipe Chicken",
        price: 6.99,
        quantity: 1,
        photo: menuData["2"][0].photo,
      },
    ];
    setCartItems(defaultCartItems);
  });

  const handleItemChange = (itemId, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  const handleItemDelete = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const handleSubmitOrder = () => {
    const order = {
      name,
      email,
      phone,
      address,
      items: cartItems,
      total: cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
    };
    // Simulate order submission
    console.log("Submitting order:", order);
  };

  return (
    <div className="cart-page">
      <div className="checkout-form">
        <h2>Checkout</h2>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Phone:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label>Address:</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>
      </div>
      <div className="cart-items">
        <h2>Shopping Cart</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.photo} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <label>Quantity:</label>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  handleItemChange(item.id, parseInt(e.target.value))
                }
              />
              <button onClick={() => handleItemDelete(item.id)}>Delete</button>
            </div>
          </div>
        ))}
        <div className="total">
          <h3>
            Total: $
            {cartItems.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </h3>
          <button onClick={handleSubmitOrder}>Submit Order</button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
