
import { useParams, Link } from "react-router-dom";
import products from "./data/products";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div>
        <h2>Product not found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="product-details-page">
      <nav className="navbar">
        <h2>AURELLE STORE</h2>
        <Link to="/">Home</Link>
      </nav>

      <div className="product-details">
        <img src={product.image} alt={product.name} />

        <div className="product-details-info">
          <p>{product.category}</p>
          <h1>{product.name}</h1>
          <h2>₹{product.price}</h2>

          <p>
            Discover elegance with this beautiful jewellery piece.
          </p>

          <button>Add to Cart</button>

          <Link to="/">← Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
