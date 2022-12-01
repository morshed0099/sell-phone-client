import React from 'react';
import ReactTimeAgo from 'react-time-ago';


const Wishlist = ({ wish, setBook }) => {
    const {  imgae_url,  newPrice,  produnctName } = wish

    return (
        <>

            <tr>
                <td><div className="avatar">
                    <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img alt='' src={imgae_url} />
                    </div>
                </div></td>
                <td>{produnctName}</td>
                <td>{newPrice}</td>
                <td><label htmlFor="produnctModal" onClick={() => setBook(wish)} className="btn btn-primary btn-sm">Book Now</label> <button className='btn btn-success btn-sm'>Delete</button></td>
            </tr>
        </>
    );
};

export default Wishlist;