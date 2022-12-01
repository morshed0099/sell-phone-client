import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

import { userAuth } from '../../AuthProvider/AuthProvider';

const ProductBookModal = ({book}) => {
    const [phoneNumber,setPhoneNumber]=useState('')
    const location=useLocation()
    const from=location.state?.from?.pathname || "/"
    const {user}=useContext(userAuth);
    const navigate=useNavigate()
    const buyer={
        email:user?.email,
        image:user?.photoURL,
        name:user?.displayName,
        phoneNumber,
    }
     
    const setPhone=(event)=>{
        event.preventDefault()
        setPhoneNumber(event.target.value);

    }
    const bookingProduct=(book,booking_id,buyer)=>{     
        const bookdata={
            booking_id:booking_id,
            book,
            buyer,
            buyer_email:user?.email
           
        }
        console.log(bookdata);
       if(user?.email){
        fetch('http://localhost:5000/booking',{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(bookdata)
        })
        .then(res=>res.json())
        .then(data=>{
             if(data.acknowledged){
                toast.success('booking sucssessfully')
             }else{
                toast.error(data.message)
             }
            })        
       } 
       else{       
        toast.error('please login first')
         navigate('/login',{from,replace:true})      
     
    }
}
    return (
        <>
            <input type="checkbox" id="produnctModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="produnctModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <input type="text" defaultValue={book.produnctName} readOnly placeholder="Type here" className="input input-bordered w-full p-4 m-2" />
                    <input type="text" defaultValue={user?.displayName} readOnly placeholder="Type here" className="input input-bordered w-full p-4 m-2" />
                    <input type="text" defaultValue={user?.email} readOnly placeholder="Type here" className="input input-bordered w-full p-4 m-2" />
                    <input type="text" defaultValue={book.newPrice} readOnly placeholder="Type here" className="input input-bordered w-full p-4 m-2" />
                    <input type="text" defaultValue={book.location} readOnly placeholder="Type here" className="input input-bordered w-full p-4 m-2" />
                    <input type="text" onBlur={setPhone} name='number'  placeholder="Type here phone number" className="input input-bordered w-full p-4 m-2" />
                    <label htmlFor="produnctModal" onClick={()=>bookingProduct(book,book._id,buyer)} className='btn btn-primary w-full'>Confirm Booking</label>
                </div>
            </div>
        </>
    );
};

export default ProductBookModal;