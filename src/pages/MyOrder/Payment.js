import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_Stipe_key);
console.log(stripePromise);

const Payment = () => {
    const payment = useLoaderData()
    const { produnctName, newPrice } = payment.book
    console.log(payment.book, "lin e 6");
    return (
        <div>
            <h3 className='text-3xl mt-4 font-semibold mb-3 '>{produnctName}</h3>
            <h3 className='text-3xl font-semibold '><strong>{newPrice}</strong>$ For Your Booking</h3>
            <div  className='w-96 text-green-700 my-6 '>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                    payment={payment}
                    key={payment._id}
                    ></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;