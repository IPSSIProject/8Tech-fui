import {PaymentElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {useEffect, useState} from "react";
import {Box, Button, Paper, Stack, Typography} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {useNavigate} from "react-router-dom";

export default function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    const [message, setMessage] = useState(null);
    const [paymentStatus, setPaymentStatus] = useState('default');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) {
            return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent.status) {
                case "succeeded":
                    setMessage("Payment succeeded!");
                    setPaymentStatus('success');
                    break;
                case "processing":
                    setMessage("Your payment is processing.");
                    setPaymentStatus('primary');
                    break;
                case "requires_payment_method":
                    setMessage("Your payment was not successful, please try again.");
                    setPaymentStatus('error');
                    break;
                default:
                    setMessage("Something went wrong.");
                    setPaymentStatus('error');
                    break;
            }
        });
    }, [stripe]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: "http://localhost:4000",
            },
        });

        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`. For some payment methods like iDEAL, your customer will
        // be redirected to an intermediate site first to authorize the payment, then
        // redirected to the `return_url`.
        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
        } else {
            setMessage("An unexpected error occurred.");
        }

        setIsLoading(false);
    };

    return (
        <Stack direction={'row'} height={'65vh'}>
            <Paper elevation={3} sx={{p: 3, width: '500px', margin: 'auto'}}>
                <Button onClick={() => navigate('/cart')} variant={'outlined'} startIcon={<ArrowBackIosNewIcon/>} sx={{mb: 2}}>
                    Retour au panier
                </Button>
                <form id="payment-form" onSubmit={handleSubmit}>
                    <PaymentElement id="payment-element" />
                    <LoadingButton
                        variant={'contained'}
                        type="submit"
                        sx={{marginTop: '10px', width: '100%'}}
                    >
                        Payer
                    </LoadingButton>

                    {/* Show any error or success messages */}
                    {
                        message &&
                        <Typography mt={2} textAlign={'center'} color={paymentStatus} id="payment-message">
                            {message}
                        </Typography>}
                </form>
            </Paper>
        </Stack>
    );
}
