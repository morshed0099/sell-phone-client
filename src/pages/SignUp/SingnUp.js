import React, { useState } from 'react';
import toast from 'react-hot-toast';
import SingupFrom from './SingupFrom';


const SingnUp = () => {
    const [seller, setSeller] = useState(false)
    const [buyer, setBuyer] = useState(false)
    const [accaunts, setAccaunt] = useState('')
    const [roll,setRoll]=useState('buyer');

    const handelSignUpSeller = (event) => {
        event.preventDefault()
        const accaunt = (event.target.innerText);
        setAccaunt(accaunt);
        setSeller(true);
        setRoll('seller')
        toast.success('for seller')
    }
    const handelSignUpBuyer = (event) => {
        event.preventDefault()
        const accaunt = (event.target.innerText);
        setAccaunt(accaunt);
        setBuyer(true);
        toast.success('for buyer')
        setRoll('buyer')
    }
    console.log(seller,accaunts)
    return (
        <div>
            

          
                <SingupFrom></SingupFrom>
               
              
            
        </div>
    );
};

export default SingnUp;