import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cartSelectors";

import Button from "../Button/Button";
import { addItemToCart } from "../../store/cart/cartActions";

import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const { name, price, imageUrl } = product;
  const handleAddToCart = () => dispatch(addItemToCart(cartItems, product));

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
