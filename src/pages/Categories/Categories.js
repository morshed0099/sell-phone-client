import React, {  useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { userAuth } from '../../AuthProvider/AuthProvider';
import ProductBookModal from '../../Shered/ProductBookModal/ProductBookModal';
import ProductCard from '../Home/Home/ProductCard';

const Categories = () => {
    const products = useLoaderData()
    const {user}=useContext(userAuth)
   const [book,setBook]=useState([])
     const buyerIfo={
        name:user.displayName,
        email:user.email
     }
   const handelWishList=(product,event)=>{
    console.log(product);
     const wishlist={
       buyerIfo,
      _id:product._id,
      age:product.age,
      category_id:product.category_id,
      location:product.location,
      oldprice:product.oldprice,
      newPrice:product.newPrice,
      post_time:product.post_time,
      produnctName:product.produnctName,
      imgae_url:product.imgae_url,
      details:product.details,
      seller:product.seller,
      condition:product.condition
}
      fetch('http://localhost:5000/wishlists',{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(wishlist)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        if(data.acknowledged)
        {
            toast.success('added wishList successfully')
            event.target.classList.remove("btn-primary")
            event.target.classList.add("disabled btn-gosht")
        }
        else{
            toast.error(data.message)
        }
      })
   }
    
    return (
        <div>
            <h1>this is category wise page</h1>
            <div className='p-6  grid grid-col-1 md:grid-flow-col-2 lg:grid-cols-3 gap-5 mx-auto max-w-[1400px] w-[90%]'>
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                        setBook={setBook}
                        handelWishList={handelWishList}
                    ></ProductCard>)
                }
               <ProductBookModal  
                key={book._id} 
                book={book}            
               ></ProductBookModal>
            </div>
        </div>
    );
};

export default Categories;