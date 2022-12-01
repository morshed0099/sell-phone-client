import React from 'react';

const MyOrderTable = ({ book }) => {
    console.log(book);
    const { imgae_url, produnctName, newPrice } = book.book;
  

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
                <td><button className='btn btn-sm btn-success'>Delete</button> <button className='btn btn-sm btn-primary ml-3'>Pay</button></td>
            </tr>
        </>
    );
};

export default MyOrderTable;