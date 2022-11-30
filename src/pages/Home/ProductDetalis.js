import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import ReactTimeAgo from 'react-time-ago';
import { userAuth } from '../../AuthProvider/AuthProvider';
import BookModal from './BookModal';

const ProductDetalis = () => {
    const product = useLoaderData()
    const {user}=useContext(userAuth);
  
    const [book, setBook] = useState({})
    const bookProduct = (book[0])
    const { details, imgae_url, location, newPrice, oldprice, post_time, produnctName, seller} = product[0]
    console.log(seller,'line 15');
    const date = (post_time[0].date)
    const time = (post_time[0].time)

    const buyerIfo={
        name:user.displayName,
        email:user.email
     }
   const handelWishList=(product,event)=>{
    console.log(product,'line 23');
     const wishlist={
       buyerIfo,
      _id:product[0]._id,
      age:product[0].age,
      category_id:product[0].category_id,
      location:product[0].location,
      oldprice:product[0].oldprice,
      newPrice:product[0].newPrice,
      post_time:product[0].post_time,
      produnctName:product[0].produnctName,
      imgae_url:product[0].imgae_url,
      details:product[0].details,
      seller:product[0].seller,
      condition:product[0].condition
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
            <div className="card card-compact md:w-[60%] mx-auto   shadow-xl">
                <figure><img src={imgae_url} className='h-[200px]  w-[100%]' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{produnctName}!</h2>
                    <p>{details}</p>
                    <p className='font-bold text-indigo-400'><span><ReactTimeAgo date={date} /></span></p>
                    <div>
                        <h2 className='mb-3 text-2xl font-bold'>Seller</h2>
                        <div className='flex  items-center'>
                            <div className="avatar">
                                <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img alt='' src={seller[0].image} />
                                </div>
                            </div>
                            <h4 className='ml-3 text-bold text-1xl'>{seller[0].name}</h4>
                            {
                                seller[0].status === true ? <h1 className='ml-3 btn btn-sm btn-primary'>verify</h1> : ""
                            }
                        </div>
                    </div>
                    <p className='font-bold'> location: {location}</p>
                    <h2 className="card-title line-through">Origial price ${oldprice}</h2>
                    <h2 className="card-title text-indigo-600">ReSell price ${newPrice}</h2>
                    <div className="card-actions justify-end">
                        <label htmlFor="produnctModal" onClick={() => setBook(product)} className="btn btn-primary w-full">Book Now</label>
                        <button onClick={()=>handelWishList(product)} className='w-full btn btn-primary'>Add To Wishlist</button>
                    </div>
                </div>
            </div>
            <div>
                {bookProduct &&
                    <BookModal
                        key={bookProduct._id}
                        bookProduct={bookProduct}
                    ></BookModal>}
            </div>
        </div>
    );
};

export default ProductDetalis;