import { Link } from "react-router-dom";
import "./DirectoryItem.scss";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="directory-body">
        <h2>{title}</h2>
        <Link to={`/shop/${title}`}>Shop Now</Link>
      </div>
    </div>
  );
};

export default DirectoryItem;
