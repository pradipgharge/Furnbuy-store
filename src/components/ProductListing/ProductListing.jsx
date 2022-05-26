import "./ProductListing.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { useProduct } from "../../context/product-context";
import { useEffect } from "react";
import { actionTypes } from "../../constants/actionTypes";
import axios from "axios";
import {
  getSortedProducts,
  getCategorizedProducts,
  getPriceRangedProducts,
  getRatedProducts,
} from "../../utilities/productFilters/index";

const { LOAD_DATA } = actionTypes;

const ProductListing = () => {
  const { productState, productDispatch } = useProduct();

  const pricedProducts = getPriceRangedProducts(
    productState.data,
    productState.price
  );
  const ratedProducts = getRatedProducts(pricedProducts, productState.rating);
  const categorizedProducts = getCategorizedProducts(
    ratedProducts,
    productState.categories
    // productState.categories.category1,
    // productState.categories.category2,
    // productState.categories.category3,
    // productState.categories.category4
  );
  const sortedProducts = getSortedProducts(
    categorizedProducts,
    productState.sortBy
  );

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
            type: LOAD_DATA,
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
        Showing All Products ({sortedProducts.length})
      </h2>
      <div className="product-card-container">
        {sortedProducts.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export { ProductListing };
