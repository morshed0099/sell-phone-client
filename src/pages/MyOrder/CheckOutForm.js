import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const CheckOutForm = ({payment}) => {
    const [cardError, setCardError] = useState('')
    const[paymentSuccess,setPaymentSucess]=useState('')
    const[loadingProccesing,setLoadingProccesing]=useState(false)
    const[trnaszictionId,setTrangzictionId]=useState('')
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe()
    const elements = useElements();

    const {newPrice,produnctName} = payment.book
    const {buyer,buyer_email,_id,booking_id}=payment

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json"        
        },
          body: JSON.stringify({ price:newPrice }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, [newPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log(error)
            setCardError(error.message)
        }else{
            setCardError('')
        }
        setLoadingProccesing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyer.name,
                        email:buyer_email,                       
                    },
                },
            },
        );
        setPaymentSucess('')
        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        
        if(paymentIntent.status==="succeeded"){ 

            setTrangzictionId(paymentIntent.id);
            setPaymentSucess('payment success');
            const payment={
                 book_id:_id,
                 common_id:booking_id,
                product_name:produnctName,
                product_price:newPrice,
                buyer_email:buyer_email,
                buyer:buyer,              
                transactionId: paymentIntent.id,               
                
            }
            fetch('http://localhost:5000/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setPaymentSucess('Congrats! your payment completed');
                        
                        toast.success('payment successfully done');

                    }
                })
                  
                fetch(`http://localhost:5000/booking/${_id}`,{
                    method:'PUT',
                    headers:{"content-type":"application/json"},
                    body:JSON.stringify({})
                }).then(res=>res.json())
                .then(data=>console.log(data))
            
        }
        
        setLoadingProccesing(false)
    }
    return (
        <>
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
                <button className='btn mt-3 btn-sm btn-primary' 
                type="submit" disabled={!stripe || !clientSecret || loadingProccesing}>
                    Pay
                </button>
            </form>
            <p className='text-red-600 font-bold text-1xl mt-3'>{cardError}</p>
            {
                paymentSuccess && <div>
                    <p className='text-orange-600 font-bold text-1xl'>{paymentSuccess}</p>
                    <p className='text-orange-600 font-bold text-1xl'>your transaction id: {trnaszictionId}</p>
                </div>
            }
        </>
    );
};

export default CheckOutForm;