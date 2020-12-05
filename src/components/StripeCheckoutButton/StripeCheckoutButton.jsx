/*
 * PROJECT: ecommerce-app client
 * MODULE: src/components/StripeCheckoutButton/StripeCheckoutButton.jsx
 * CREATED: Decem ber 2020
 * CREATED BY: Ric Mershon
 *
 * Description: StripeCheckoutButton React functional compoonent.
 */

/*
 * EXTERNAL DEPENDENCIES
 */

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

/*
 * Component
 */

const StripeCheckoutButton = ({ price, currentUser }) => {
    const priceForStripe = price * 100; // Stripe takes charges in cents.
    const publishableKey = "pk_test_51HsiONCRTQIFczPUoKDY4PRBQsKraBjgSzN0DYkDkROfC0prE1Z0wKN7x364m7devK3prGN75LfSKxRm5OUQDi3i00aOYrrM18";

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="Ecommerce App"
            billingAddresss
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={ `Your total price is $${price}` }
            amount={ priceForStripe }
            panelLabel='Pay Now'
            token={ onToken }
            stripeKey={ publishableKey }
        />
    )
}

export default StripeCheckoutButton;