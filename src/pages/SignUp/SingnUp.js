import React, { useState } from 'react';
import toast from 'react-hot-toast';
import SingupFrom from './SingupFrom';

const SingnUp = () => {
    const [seller, setSeller] = useState(false)
    const [buyer, setBuyer] = useState(false)
    const [accaunts, setAccaunt] = useState('')

    const handelSignUpSeller = (event) => {
        event.preventDefault()
        const accaunt = (event.target.innerText);
        setAccaunt(accaunt);
        setSeller(true);
        toast.success('for seller')
    }
    const handelSignUpBeller = (event) => {
        event.preventDefault()
        const accaunt = (event.target.innerText);
        setAccaunt(accaunt);
        setBuyer(true);
        toast.success('for buyer')
    }
    console.log(seller,accaunts)
    return (
        <div>
            <div className='flex justify-center items-center mb-8 mt-6'>
                <button onClick={handelSignUpSeller} className='btn btn-primary mr-3 p-2'>open accaunt for seller</button>
                <button onClick={handelSignUpBeller} className='btn btn-secondary p-2'>open accaunt for Buyer</button>
            </div>

            { seller || buyer ?
                <SingupFrom
                accaunts={accaunts}
                >
                </SingupFrom>:<></>
            }
        </div>
    );
};

export default SingnUp;