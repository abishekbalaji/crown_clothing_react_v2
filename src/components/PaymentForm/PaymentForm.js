import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectCartTotal } from "../../store/cart/cartSelectors";
import { emptyCart } from "../../store/cart/cartActions";
import { selectCurrentUser } from "../../store/user/userSelector";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "../Button/Button";

import "./PaymentForm.scss";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amount * 100,
      }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: user ? user.displayName : "Guest",
          address: {
            city: "city",
            state: "state",
            country: "in",
            line1: "line1",
            line2: "line2",
          },
        },
      },
    });
    setIsProcessingPayment(false);
    if (paymentResult.error) {
      alert(paymentResult.error);
    } else if (paymentResult.paymentIntent.status === "succeeded") {
      dispatch(emptyCart());
      alert("Payment successful!");
    }
  };
  return (
    <div className="payment-form-container">
      <form className="payment-form" onSubmit={paymentHandler}>
        <h2>Credit Card Payment</h2>
        <CardElement />
        <Button isLoading={isProcessingPayment} btnType="inverted">
          Pay Now
        </Button>
      </form>
    </div>
  );
};

export default PaymentForm;
