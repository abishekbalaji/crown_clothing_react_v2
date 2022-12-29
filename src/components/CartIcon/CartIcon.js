import { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../contexts/CartContext/CartContext";

import "./CartIcon.scss";

const CartIcon = () => {
  const { setIsCartOpen, cartCount } = useContext(CartContext);
  const handleCartIconClick = () => {
    setIsCartOpen((prev) => !prev);
  };
  return (
    <div onClick={handleCartIconClick} className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
