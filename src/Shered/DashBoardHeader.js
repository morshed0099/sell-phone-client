import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { userAuth } from '../AuthProvider/AuthProvider';

const DashBoardHeader = () => {
       const {user,logOut}=useContext(userAuth)    
    const [catagories, setCategories] = useState([])
    const[singUser,setSignUser]=useState('')
  
    useEffect(()=>{
        fetch(`http://localhost:5000/users?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setSignUser(data))
    },[user])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    const handelLout=(event)=>{
          event.preventDefault()
          logOut()
          .then(()=>{
            toast.success('logOut success')
          }).catch(error=>console.error(error))
    }
    const menuItem =
        <>
                 
            <Link to='/dashboard/allseller'>All Seller</Link>
            <Link to='/dashboard/allbuyer'>All Buyer</Link>
            <Link to='/dashboard/myproduct'>MyAddedProduct</Link>
            <Link to='/dashboard/addproduct'>AddProduct</Link>
            <Link to='/dashboard/wishlist'>MyWishList</Link>            
            <Link to='/dashboard/order'>MyOrder</Link>            
            {
                user?.email ?
                    <>                       
                        {/* {
                            singUser?.userRoll==='admin'?<><Link to='/dashboard/alluser'>All Seller</Link></>:<></>
                        } */}
                       {/* {
                        singUser?.userRoll==='seller'? <><Link to='/dashboard/addproduct'>AddProduct</Link> <Link to='/dashboard/myproduct'>MyAddedProduct</Link></>:<></>
                       }                        */}
                        <button onClick={handelLout} className='btn btn-ghost'>logOut</button>
                    </>
                    :
                    <>
                        <Link to='/login'>Login</Link>
                        <Link to='/signup'>signUp</Link>                       
                        {/* {
                        singUser?.userRoll==="seller"? <Link to='/dashboard/addproduct'>AddProduct</Link>:""
                       }   */}
                    </>
            }
         
        </>
    return (
        <nav className='sticky top-0 z-50'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            
                            <li>{menuItem}</li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl"><span className='text-orange-600 mr-1'>Sell</span> Phone</Link >
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">

                       
                        <li>{menuItem}</li>
                    </ul>
                </div>                
            </div>
        </nav>
    );
};

export default DashBoardHeader;