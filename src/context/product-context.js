import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../reducers/productReducer";

const ProductContext = createContext();
const useProduct = () => {
  return useContext(ProductContext);
};

const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(productReducer, {
    data: [],
  });
  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, useProduct };
