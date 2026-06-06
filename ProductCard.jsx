import React, { useState } from "react";

import {
  FaHeart,
  FaStar
} from "react-icons/fa";

function ProductCard({
  product,
  addToCart,
  liked,
  toggleLike
}) {
  const [review, setReview] =
    useState("");

  return (
    <div className="card">

      <img
        src={product.image}
        alt=""
      />

      <h3>{product.name}</h3>

      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      <p>${product.price}</p>

      <button
        onClick={() =>
          addToCart(product)
        }
      >
        Add To Cart
      </button>

      <FaHeart
        className={
          liked.includes(product.id)
            ? "liked"
            : ""
        }
        onClick={() =>
          toggleLike(product.id)
        }
      />

      <textarea
        placeholder="Write review"
        value={review}
        onChange={(e) =>
          setReview(
            e.target.value
          )
        }
      />
    </div>
  );
}

export default ProductCard;