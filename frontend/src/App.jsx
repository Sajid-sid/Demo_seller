
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import products from "./data/products";
import ProductDetails from "./ProductDetails";

import "./App.css";

function Home() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((previousCart) => [...previousCart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div>
      <nav className="navbar">
        <h2>AURELLE STORE</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <a href="#products">Shop</a>
          <span>Cart ({cart.length})</span>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p>THE ART OF ELEGANCE</p>

          <h1>
            Jewellery That
            <br />
            Tells Your Story.
          </h1>

          <span>
            Discover beautiful jewellery for every special moment.
          </span>

          <a href="#products">SHOP COLLECTION</a>
        </div>
      </section>

      <section className="products-section" id="products">
        <p className="section-label">OUR COLLECTION</p>
        <h2>Featured Jewellery</h2>

        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
              </Link>

              <div className="product-info">
                <p>{product.category}</p>

                <Link
                  to={`/product/${product.id}`}
                  className="product-name-link"
                >
                  <h3>{product.name}</h3>
                </Link>

                <h4>₹{product.price}</h4>

                <button onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <h2>AURELLE STORE</h2>
        <p>Elegance in Every Detail.</p>
      </footer>
    </div>
  );
}

function App() {
    return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );

}

export default App;
