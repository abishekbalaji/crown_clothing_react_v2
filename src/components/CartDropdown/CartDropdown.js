import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectCartItems } from "../../store/cart/cartSelectors";
import { setIsCartOpen } from "../../store/cart/cartActions";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

import "./CartDropdown.scss";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    navigate("/checkout");
    dispatch(setIsCartOpen());
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={handleCheckoutClick}>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
