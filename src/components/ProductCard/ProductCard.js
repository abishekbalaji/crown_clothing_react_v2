import { useContext } from "react";

import Button from "../Button/Button";

import { CartContext } from "../../contexts/CartContext/CartContext";

import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;

  const handleAddToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button btnType="inverted" onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
