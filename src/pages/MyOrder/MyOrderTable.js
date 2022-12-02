import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const MyOrderTable = ({ book,refetch }) => {
    const {_id,paid}=book
    const { imgae_url, produnctName, newPrice, } = book.book;
    console.log(book ," 7");
     const handelDelete=(id)=>{
       const yes= window.confirm('are you sure delete ?')
       if(yes){
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:"DELETE",
            headers:{"content-type":"application/json"}
        }).then(res=>res.json()).then(data=>{
            if(data.deletedCount>0){
                toast.success('delete successfully')
                refetch();
            }            
        })
       }
     } 

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
                <td><button onClick={()=>handelDelete(book._id)} className='btn btn-sm btn-success'>Delete</button> 
                {
                    newPrice && !paid &&  <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-sm btn-primary ml-3'>Pay</button></Link>
                }
                {
                    newPrice && paid && <button className='btn btn-sm btn-primary ml-3'>paid</button>
                }
                </td>
            </tr>
        </>
    );
};

export default MyOrderTable;