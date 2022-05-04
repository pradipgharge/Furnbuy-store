import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar container-2">
        <div>
          <a href="/index.html">
            <span className="header-title">Furnbuy</span>
          </a>
        </div>
        <ul className="navbar-left">
          <li>
            <a href="/">
              <span className="header-pills">Products</span>
            </a>
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
            <a href="/">
              <div>
                <i className="fas fa-user-xmark icon" />
              </div>
            </a>
          </li>
          <li>
            <a href="/">
              <div className="badge bd-sm">
                <i className="fas fa-heart icon" />
                <span className="bd-count">2</span>
              </div>
            </a>
          </li>
          <li>
            <a href="/">
              <div className="badge bd-sm">
                <i className="fas fa-shopping-cart icon" />
                <span className="bd-count">3</span>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Navbar };
