import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const onToken = (token) => {
    alert("Payment Succesful");
  };

  const priceForSripe = price * 100;
  asd;
  const publishableKey =
    "pk_test_51H4UGcJTsJQmDMTh7GFpaAn6LrThS33u8VJ0lJe1ca2JsPxXlWx34Qk9QZd5PAGzl5dTioLc4dw1vqTr83QPpIZn005IOciMbq";
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForSripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
