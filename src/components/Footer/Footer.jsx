import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4 className="footer-col-heading">Our Company</h4>
          <ul className="footer-list">
            <li className="footer-list-item">About Us</li>
            <li className="footer-list-item">Career</li>
            <li className="footer-list-item">Our Services</li>
            <li className="footer-list-item">Faq</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-column-heading">Categories</h4>
          <ul className="footer-list">
            <li className="footer-list-item">Chairs & Sofas</li>
            <li className="footer-list-item">Lamp & Lightings</li>
            <li className="footer-list-item">Storage & Shelves</li>
            <li className="footer-list-item">Living Room</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-col-heading">Useful Links</h4>
          <ul className="footer-list">
            <li className="footer-list-item">Help Center</li>
            <li className="footer-list-item">Address</li>
            <li className="footer-list-item">Track your order</li>
            <li className="footer-list-item">Refer & Earn</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-col-heading">Follow Us</h4>
          <div className="social-links">
            <a href="https://twitter.com/pradipgharge" target="_blank">
              <i className="fa-brands fa-twitter" />
            </a>
            <a href="https://instagram.com/pradipgharge" target="_blank">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="https://linkedin.com/pradipgharge" target="_blank">
              <i className="fa-brands fa-linkedin" />
            </a>
            <a href="https://github.com/pradipgharge" target="_blank">
              <i className="fa-brands fa-github" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright-text">
        <i className="fa-regular fa-copyright" /> | 2022 | pradipgharge
      </div>
    </footer>
  );
};

export { Footer };
