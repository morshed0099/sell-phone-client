import React from 'react';
import ReactTimeAgo from 'react-time-ago';

const ProductCard = ({ product,setBook}) => {
    
    console.log(product);
    const { age, category_id, condition, details, imgae_url, location, newPrice, oldprice, post_time, produnctName, seller, _id } = product

    const date = (post_time[0].date)
    const time = (post_time[0].time)
    const handelBook=(product)=>{
        setBook(product);
    }
    return (
        <div className="card card-compact   shadow-xl">
            <figure><img src={imgae_url} className='h-[200px] w-[100%]' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{produnctName}!</h2>
                <p>{details}</p>
                <p className='font-bold text-indigo-400'><span>{time} <ReactTimeAgo date={date} timeStyle='twitter' /> ago </span></p>
                <h2 className="card-title line-through">Origial price ${oldprice}!</h2>
                <h2 className="card-title text-indigo-600">ReSell price ${newPrice}!</h2>
                <div className="card-actions justify-end">
                <label htmlFor="produnctModal" onClick={()=>handelBook(product)} className="btn btn-primary w-full">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;