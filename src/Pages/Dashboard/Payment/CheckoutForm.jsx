
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import useAuth from './../../../Hooks/useAuth';
import useCarts from './../../../Hooks/useCarts';
import { useEffect } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';


const CheckoutForm = () => {

    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    console.log(clientSecret)

    const stripe = useStripe()
    const elements = useElements()
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const [cart] = useCarts()

    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log('get ClientSecret', res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)

        if (card == null) {
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });


        if (error) {
            console.log("payment error", error)
            setError(error.message)
        } else {
            console.log("Payment Method create", paymentMethod)
            setError('')
        }


        // confirm payment
        const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email,
                    name: user?.displayName
                }
            }
        })

        if (confirmError) {
            console.log('confirm error', confirmError)
        } else {
            console.log('payment intent', paymentIntent)
        }

    };






    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-primary my-4' type="submit" disabled={!stripe}>
                Payment
            </button>


            <p className='text-red-600'>{error}</p>
        </form>
    );
};

export default CheckoutForm;