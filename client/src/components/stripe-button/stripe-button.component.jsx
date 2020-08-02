import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForSripe,
        token: token,
      },
    })
      .then((response) => {
        alert("Payment successful");
      })
      .catch((error) => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please make sure you use the provided credit card."
        );
      });
  };

  const priceForSripe = price * 100;
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
