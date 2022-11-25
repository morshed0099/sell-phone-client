import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { userAuth } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const { user,logOut } = useContext(userAuth)
    const [catagories, setCategories] = useState([])

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
            <Link to='/'>Home</Link>
            {
                user?.email ?
                    <>
                        <Link to='/dashboard'>Dashboard</Link>
                        <Link to='/addproduct'>AddProduct</Link>                        
                        <button onClick={handelLout} className='btn btn-ghost'>logOut</button>
                    </>
                    :
                    <>
                        <Link to='/login'>Login</Link>
                        <Link to='/signup'>signUp</Link>
                    </>
            }

        </>
    return (
        <nav>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            <li tabIndex={0}>
                                <span>
                                    Category
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </span>
                                <ul className="p-2 z-50 bg-white">
                                    {
                                        catagories.map(category => <li><Link to={`/category/${category.category_id}`}>{category.category_name}</Link></li>)
                                    }
                                </ul>                               
                            </li>
                            <li>{menuItem}</li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl"><span className='text-orange-600 mr-1'>Sell</span> Phone</Link >
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">

                        <li tabIndex={0}>
                            <span className="justify-between">
                                Category
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </span>
                            <ul className="p-2 z-50 bg-white">
                                {
                                    catagories.map(category => <li><Link to={`/category/${category.category_id}`}>{category.category_name}</Link></li>)
                                }
                            </ul>                            
                        </li>
                        <li>{menuItem}</li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;