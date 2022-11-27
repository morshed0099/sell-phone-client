import React from 'react';

const ProductBookModal = ({book}) => {
    console.log(book,'line 4');
    const bookingProduct=()=>{
        console.log('book');

    }
    return (
        <>
            <input type="checkbox" id="produnctModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="produnctModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full p-4 m-2" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full p-4 m-2" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full p-4 m-2" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full p-4 m-2" />
                    <label htmlFor="produnctModal" onClick={bookingProduct} className='btn btn-primary w-full'>Confirm Booking</label>
                </div>
            </div>
        </>
    );
};

export default ProductBookModal;