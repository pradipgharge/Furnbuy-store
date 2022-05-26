import "./Products.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { ProductFilters, ProductListing } from "../../components";
const Products = () => {
  return (
    <div className="page-wrapper">
      <header className="header header-fixed">
        <Navbar />
      </header>
      <section className="product-home-container">
        <ProductFilters />
        <ProductListing />
      </section>
    </div>
  );
};

export { Products };
