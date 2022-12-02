import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <div>
                <span className="footer-title">quick Link</span>
                <Link to='/'>Home</Link>
                <Link to='/blog'>Blog</Link>
            </div>
            <div>
               ALL Right Reserve Sell Phone 2022
            </div>
            <div>
                <p className='text-white font-bold text-1xl'>Head Office</p>
                <p className='text-white font-bold text-1xl'>Dhaka, New Palton</p>
                <p className='text-white font-bold text-1xl'>Hot Line, 0000000</p>
                <p className='text-white font-bold text-1xl'>Email, sell@.com.</p>
            </div>
        </footer>
    );
};

export default Footer;