// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// function Navigation() {
//   const location = useLocation();

//   return (
//     <div className="navigation">
//       <div className="nav-links">
//         <Link
//           to="/"
//           className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
//         >
//           Shop
//         </Link>
//         <div className="divider"></div>
//         <Link
//           to="/cart"
//           className={`nav-link ${
//             location.pathname === "/cart" ? "active" : ""
//           }`}
//         >
//           Shopping Cart
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Navigation;

// src/components/Navigation.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();

  return (
    <div className="navigation">
      <div className="nav-links">
        <Link
          to="/"
          className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
        >
          Shop
        </Link>
        <div className="divider"></div>
        <Link
          to="/cart"
          className={`nav-link ${
            location.pathname === "/cart" ? "active" : ""
          }`}
        >
          Shopping Cart
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
