import { createContext, useEffect, useState } from "react";

import { getCategoryItemsAndDocument } from "../../utils/firebase/firebase.js";

// import SHOP_DATA from "../../shop-data.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategoryItems = async () => {
      const categoryMap = await getCategoryItemsAndDocument();
      setCategoriesMap(categoryMap);
    };

    getCategoryItems();
  }, []);
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
