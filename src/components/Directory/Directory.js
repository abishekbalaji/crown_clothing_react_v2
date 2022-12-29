import DirectoryItem from "./DirectoryItem/DirectoryItem";
import "./Directory.scss";

const Directory = ({ categories }) => {
  const categoriesList = categories.map((category) => (
    <DirectoryItem category={category} key={category.id} />
  ));
  return <div className="categories-container">{categoriesList}</div>;
};

export default Directory;
