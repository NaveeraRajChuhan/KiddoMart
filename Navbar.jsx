import React from "react";
import { FaShoppingCart } from "react-icons/fa";

function Navbar({ cartCount }) {
  return (
    <nav>
      <h1>ToyLand</h1>

      <ul>
        <li>Home</li>
        <li>Shop</li>
        <li>Reviews</li>
        <li>Contact</li>
      </ul>

      <div className="cart">
        <FaShoppingCart />
        <span>{cartCount}</span>
      </div>
    </nav>
  );
}

export default Navbar;