import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cartSelectors";
import {
  addItemToCart,
  removeItemFromCart,
  clearCartItem,
} from "../../store/cart/cartActions";

import "./CheckoutItem.scss";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { name, imageUrl, quantity, price } = cartItem;

  const handleAddItem = () => dispatch(addItemToCart(cartItems, cartItem));

  const handleRemoveItem = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  const handleClearItem = () => dispatch(clearCartItem(cartItems, cartItem));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name} </span>
      <span className="quantity">
        <div className="arrow" onClick={handleRemoveItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleAddItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleClearItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
