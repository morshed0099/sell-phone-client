

import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { Link, NavLink } from 'react-router-dom';
import { userAuth } from '../../AuthProvider/AuthProvider';
import ScrollToTop from '../scrollToTop';



const Header = () => {
    const { user, logOut, loader } = useContext(userAuth)
    const [catagories, setCategories] = useState([])


    useEffect(() => {
        fetch('https://sell-phones-server-morshed0099.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    const handelLout = (event) => {
        event.preventDefault()
        logOut()
            .then(() => {
                toast.success('logOut success')
            }).catch(error => console.error(error))
    }

    if (loader) {
        <h1>loading</h1>
    }
    const menuItem =
        <>
            <ScrollToTop>

                <NavLink className={`mr-4 rounded-md {isactive ? "active":"deactive"}`} to='/'>Home</NavLink>
                <NavLink className={`mr-4 rounded-md {isactive ? "active":"deactive"}`} to='/blog'>Blog</NavLink>
                {
                    user?.email ?
                        <>

                            <NavLink className={`mr-4 rounded-md  {isactive ? "active":"deactive"}`} to='/dashboard'>Dashboard</NavLink>
                            <button onClick={handelLout} className='rounded-md btn btn-ghost '>logOut</button>
                        </>
                        :
                        <>

                            <NavLink className={`mr-4 rounded-md  {isactive ? "active":"deactive"}`} to='/login'>Login</NavLink>
                            <NavLink className={`mr-4 rounded-md {isactive ? "active":"deactive"}`} to='/signup'>signUp</NavLink>

                        </>
                }
            </ScrollToTop>

        </>

    return (

        <div className=' bg-base-200  mx-auto'>
            <nav className='sticky top-0 z-50 '>
                <div className="navbar flex justify-between">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu rorunded-md menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                                <li tabIndex={0}>
                                    <span className=''>
                                        Category
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                    </span>
                                    <ul className="p-2 z-50 bg-white">
                                        {
                                            catagories.map(category => <li><Link className={` {isactive ? "active":"deactive"}`} to={`/category/${category._id}`}>{category.category_name}</Link></li>)
                                        }
                                    </ul>
                                </li>
                                <li>{menuItem}</li>
                            </ul>
                        </div>
                        <div>
                            <Link to='/' className="btn btn-ghost normal-case text-xl"><span className='text-orange-600 mr-1 font-bold text-3xl'>Sell</span>Phone</Link >
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">

                            <li tabIndex={0}>
                                <span className="justify-between mr-4">
                                    Category
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </span>
                                <ul className="p-2 z-50 bg-white">
                                    {
                                        catagories.map(category => <li><Link className={`{isactive ? "active":"deactive"}`} to={`/category/${category._id}`}>{category.category_name}</Link></li>)
                                    }
                                </ul>
                            </li>
                            <li>{menuItem}</li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>

    );
};

export default Header;