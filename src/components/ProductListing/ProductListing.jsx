import "./ProductListing.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { useProduct } from "../../context/product-context";
import { useEffect } from "react";
import axios from "axios";

const ProductListing = () => {
  const { productState, productDispatch } = useProduct();
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/products");
        if (res.status === 200) {
          let products = res.data.products;
          products = products.map((product) => ({
            ...product,
            discountedPrice:
              product.price - product.price * (product.discount / 100),
          }));

          productDispatch({
            type: "LOAD_DATA",
            payload: products,
          });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="products-container">
      <h2 className="products-heading">
        Showing All Products ({productState.data.length})
      </h2>
      <div className="product-card-container">
        {productState.data.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export { ProductListing };
