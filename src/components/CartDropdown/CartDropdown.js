import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

import { CartContext } from "../../contexts/CartContext/CartContext";

import "./CartDropdown.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const handleCheckoutClick = () => navigate("/checkout");

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
