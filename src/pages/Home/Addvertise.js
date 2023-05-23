import React from 'react';
import { Link } from 'react-router-dom';


const Addvertise = ({ product}) => {

    const { imgae_url, newPrice, oldprice,  produnctName,  _id } = product
    return (
        <div className="card max-w-[1400px]  bg-base-100 shadow-md">
            <figure><img src={imgae_url} alt="Shoes" className='h-[200px] w-full' /></figure>
            <div className="card-body">
                <h2 className="card-title">
                  Model: 
                    <div className="badge badge-secondary">{produnctName}</div>
                </h2>
                
                <div className="card-actions justify-center">
                    <p>price : </p>
                    <div className="badge badge-outline font-bold text-indigo-700">{newPrice}$</div>
                    <div className="badge badge-outline line-through">{oldprice}$</div>
                   <Link to={`/product/${_id}`}> <button  className="btn btn-outline  btn-sm btn-primary w-full">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Addvertise;