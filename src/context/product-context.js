import { createContext, useContext, useReducer } from "react";
import { productReducer, initialProducts } from "../reducers/productReducer";

const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialProducts
  );
  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => {
  return useContext(ProductContext);
};

export { ProductProvider, useProduct };
