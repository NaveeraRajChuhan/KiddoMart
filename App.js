import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import CustomCursor from "./components/CustomCursor";

import products from "./data/products";

function App() {
  const [cart, setCart] = useState([]);
  const [liked, setLiked] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const toggleLike = (id) => {
    if (liked.includes(id)) {
      setLiked(liked.filter((item) => item !== id));
    } else {
      setLiked([...liked, id]);
    }
  };

  return (
    <>
      <CustomCursor />

      <Navbar cartCount={cart.length} />

      <Hero />

      <section className="products">
        <h2>Popular Toys</h2>

        <div className="grid">
          {products.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              addToCart={addToCart}
              liked={liked}
              toggleLike={toggleLike}
            />
          ))}
        </div>
      </section>

      <section className="newsletter">
        <h2>Join Toy Club</h2>
        <p>Get Cute Toy Updates Weekly</p>

        <input placeholder="Enter Email" />
        <button>Subscribe</button>
      </section>
    </>
  );
}

export default App;