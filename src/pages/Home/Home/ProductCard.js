import React from 'react';
import ReactTimeAgo from 'react-time-ago';


const ProductCard = ({ product, setBook,handelWishList }) => {


    const {  details, imgae_url, location, newPrice, oldprice, post_time, produnctName, seller } = product

    const date = (post_time[0].date)
    const time = (post_time[0].time)
    const handelBook = (product) => {
        setBook(product);
    }
    return (
        <div className="card card-compact    shadow-xl">
            <figure><img src={imgae_url} className='h-[200px] w-[100%]' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{produnctName}!</h2>
                <p>{details}</p>
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
                            seller[0].status===true ?<h1 className='ml-3 btn btn-sm btn-primary'>verify</h1>:""
                        }
                    </div>
                </div>
                <p className='font-bold'> location: {location}</p>
                <p className='font-bold text-indigo-400'><span>{time} <ReactTimeAgo date={date} timeStyle='twitter' /> ago </span></p>
                <h2 className="card-title line-through">Origial price ${oldprice}!</h2>
                <h2 className="card-title text-indigo-600">ReSell price ${newPrice}!</h2>
                <div className="card-actions justify-end">
                    <label htmlFor="produnctModal" onClick={() => handelBook(product)} className="btn btn-primary w-full">Book Now</label>
                    <button onClick={(event)=>handelWishList(product,event)} className='w-full btn btn-primary'>Add To WishList</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;