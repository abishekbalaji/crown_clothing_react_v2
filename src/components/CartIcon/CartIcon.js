import { useSelector, useDispatch } from "react-redux";

import { selectCartCount } from "../../store/cart/cartSelectors";
import { setIsCartOpen } from "../../store/cart/cartActions";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./CartIcon.scss";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const handleCartIconClick = () => {
    // setIsCartOpen((prev) => !prev);
    dispatch(setIsCartOpen());
  };
  return (
    <div onClick={handleCartIconClick} className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
