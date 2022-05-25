import "./ProductCard.css";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  return (
    <div className="card card-vt">
      <div className="card-header">
        <Link to="/">
          <img className="card-img" src={product.img} alt={product.title} />
        </Link>
        <span className="btn-wishlist">
          <i className="fas fa-heart" />
        </span>
      </div>

      <div className="card-text-content">
        <div className="card-title">
          <p>{product.title}</p>
          <span className="card-bdg">
            {product.rating} <i className="fas fa-star" />
          </span>
        </div>
        <p className="card-subtitle">{product.subtitle}</p>
        <div className="card-pricing">
          <p>&#8377; {product.discountedPrice}</p>
          <p className="font-light strikethrough">&#8377; {product.price}</p>
          <p className="card-discount">{product.discount}% off</p>
        </div>
      </div>
      <div className="card-footer">
        <button className="btn btn-icon btn-solid-primary">
          <i className="fas fa-shopping-cart"></i>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export { ProductCard };
