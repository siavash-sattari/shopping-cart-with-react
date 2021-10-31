import React, {useState, useEffect, createContext} from "react";

// API
import {getProducts} from "../services/api";

export const ProductsContext = createContext();

function ProductContextProvider({children}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getProducts();
      console.log(data);
      setProducts(data);
    };

    fetchAPI();
  }, []);

  return (
    <>
      <ProductsContext.Provider value={products}>{children}</ProductsContext.Provider>
    </>
  );
}

export default ProductContextProvider;
