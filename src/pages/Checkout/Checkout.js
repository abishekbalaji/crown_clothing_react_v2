import { useSelector } from "react-redux";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cartSelectors";

import PaymentForm from "../../components/PaymentForm/PaymentForm";

import "./Checkout.scss";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <span className="total">Total: ${cartTotal}</span>
      <PaymentForm />
      <p>
        Use test Cedit Card: <b>4242 4242 4242 4242</b>
      </p>
      <p>Date should be some time in the future. The rest can be anything.</p>
    </div>
  );
};

export default Checkout;
