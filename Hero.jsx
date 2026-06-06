import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero">
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
      >
        <h1>
          Cute Toys For Every Child
        </h1>

        <p>
          Discover adorable plushies,
          gifts and collectibles.
        </p>

        <button>Shop Now</button>
      </motion.div>
    </section>
  );
}

export default Hero;