import React from 'react';

const DetailsAddedProducts = ({ product }) => {
    console.log(product);
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className='w-[300px] h-[200px]' src={product.imgae_url} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {product.produnctName}
                </h2>
                <p>{product.details}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Delete</button>
                    <button className="btn btn-primary">UpDate</button>
                    <button className="btn btn-primary">Sold</button>
                </div>
            </div>
        </div>
    );
};

export default DetailsAddedProducts;