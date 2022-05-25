import "./Products.css";
import { Navbar } from "../../components/Navbar/Navbar";
const Products = () => {
  return (
    <div className="page-wrapper">
      <header className="header header-fixed">
        <Navbar />
      </header>
      <section className="product-home-container"></section>
    </div>
  );
};

export { Products };
