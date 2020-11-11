import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51HlxKjJLWfE2BI87Cpv2mkSQNDwNqQGRdQ5k7MSrUQEPYW2Reqfl0xtCHD4cZalZIhvyrpTN7rzmw5mfBZiq7TC600xJN40sEH";

	const onToken = (token) => {
		console.log(token);
		alert("Payment successful");
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://sendeyo.com/up/d/f3eb2117da"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		></StripeCheckout>
	);
};

export default StripeCheckButton;
