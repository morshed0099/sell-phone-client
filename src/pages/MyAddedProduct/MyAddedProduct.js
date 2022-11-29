import React, { useContext, useEffect, useState } from 'react';
import { userAuth } from '../../AuthProvider/AuthProvider';
import DetailsAddedProducts from './DetailsAddedProducts';

const MyAddedProduct = () => {
    const [products,setProduct]=useState([])
    const {user}=useContext(userAuth)

    useEffect(() => {
        fetch(`http://localhost:5000/products?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    }, [user?.email])
    return (
        <div>
            <h1>Your ALL Product</h1>
          <div className='m-6 p-4 gap-4 mx-auto grid grid-cols-1  md:grid-cols-2'>
          {
                products.map(product=><DetailsAddedProducts
                 key={product._id +1}
                 product={product}
                ></DetailsAddedProducts>)            }
          </div>
        </div>
    );
};

export default MyAddedProduct;