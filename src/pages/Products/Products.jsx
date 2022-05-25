import "./Products.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { ProductListing } from "../../components";
const Products = () => {
  return (
    <div className="page-wrapper">
      <header className="header header-fixed">
        <Navbar />
      </header>
      <section className="product-home-container">
        <ProductListing />
      </section>
    </div>
  );
};

export { Products };
