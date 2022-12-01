import React from 'react';
import toast from 'react-hot-toast';


const Wishlist = ({ wish, setBook,refetch }) => {
    const {  imgae_url,  newPrice,  produnctName } = wish
    const handelDelete=(id)=>{
        console.log(id,'line 8');
       const yes=window.confirm('are you sure delete ?');
       if(yes){
        fetch(`http://localhost:5000/wishlist/${id}`,{
            method:'DELETE',
            headers:{"content-type":"application/json"}
        }).then(res=>res.json()).then(data=>{console.log(data)
            if(data.deletedCount>0){
                toast.success('delete successfully')
            }
            refetch();
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
                <td><label htmlFor="produnctModal" onClick={() => setBook(wish)} className="btn btn-primary btn-sm">Book Now</label> <button onClick={()=>handelDelete(wish._id)} className='btn btn-success btn-sm'>Delete</button></td>
            </tr>
        </>
    );
};

export default Wishlist;