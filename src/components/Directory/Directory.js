import CategoryItem from "./CategoryItem/CategoryItem";
import "./Directory.scss";

const Directory = ({ categories }) => {
  const categoriesList = categories.map((category) => (
    <CategoryItem category={category} key={category.id} />
  ));
  return <div className="categories-container">{categoriesList}</div>;
};

export default Directory;
