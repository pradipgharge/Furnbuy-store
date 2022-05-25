import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar container-2">
      <div>
        <Link to="/">
          <span className="nav-brand">Furnbuy</span>
        </Link>
      </div>
      <ul className="navbar-left">
        <li>
          <Link to="/products">
            <span className="header-pills">Products</span>
          </Link>
        </li>
        <li className="search-bar">
          <span className="search-bar-icon">
            <i className="fas fa-search " />
          </span>
          <input
            className="search-bar-input"
            type="text"
            placeholder="Search products..."
          />
        </li>
      </ul>
      <ul className="navbar-right">
        <li>
          <Link to="/">
            <div>
              <i className="fas fa-user-xmark icon" />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div className="badge bd-sm">
              <i className="fas fa-heart icon" />
              <span className="bd-count">2</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div className="badge bd-sm">
              <i className="fas fa-shopping-cart icon" />
              <span className="bd-count">3</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
