import {useEffect, useState} from "react";
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import PaymentForm from "../components/buisness/PaymentForm";

export default function Payment() {
    const stripePromise = loadStripe("pk_test_51LAsZnEz9SrYVG8JAeibSTBXGithPwhZYx9aWJ5wHX1QhWmZA0ZvUuhxbEsDF0AoqPRodavo5mX4rWj2fQJ5r2cm008K7logG2");

    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:4000/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret))
            .catch(e => console.error(e))
        ;
    }, []);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };


    return (
        <>
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <PaymentForm />
                </Elements>
            )}
        </>
    )
}
