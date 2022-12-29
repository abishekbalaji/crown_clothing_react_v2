import { Fragment, useContext } from "react";

import { CategoriesContext } from "../../contexts/CategoriesContext/CategoriesContext";

import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <CategoryPreview
          key={title}
          title={title}
          products={categoriesMap[title]}
        />
      ))}
    </Fragment>
  );
};

export default CategoriesPreview;
