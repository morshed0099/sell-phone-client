import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReactTimeAgo from 'react-time-ago';
import BookModal from './BookModal';

const ProductDetalis = () => {
    const product = useLoaderData()
    const [book, setBook] = useState({})
    const bookProduct = (book[0])
    const { age, category_id, condition, details, imgae_url, location, newPrice, oldprice, post_time, produnctName, seller, _id } = product[0]
    console.log(seller);
    const date = (post_time[0].date)
    const time = (post_time[0].time)
    return (
        <div>
            <div className="card card-compact md:w-[60%] mx-auto   shadow-xl">
                <figure><img src={imgae_url} className='h-[200px]  w-[100%]' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{produnctName}!</h2>
                    <p>{details}</p>
                    <p className='font-bold text-indigo-400'><span>{time} - <ReactTimeAgo date={date} />  </span></p>
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