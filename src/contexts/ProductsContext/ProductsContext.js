import { createContext, useState } from "react";

import SHOP_DATA from "../../shop-data.json";

export const ProductsContext = createContext({
  products: [],
  setproducts: null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setproducts] = useState(SHOP_DATA);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
