import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const menuItem =
        <>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>signUp</Link>
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
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;