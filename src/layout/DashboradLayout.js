import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { userAuth } from '../AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Footer from '../Shered/Footer/Footer';
import Header from '../Shered/Header/Header';

const DashboradLayout = () => {
    const { user } = useContext(userAuth);

    const [isAdmin] = useAdmin(user?.email)
    //    refetch()
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><Link to='/dashboard/myproduct'>MyAddedProduct</Link></li>
                        <li><Link to='/dashboard/addproduct'>AddProduct</Link></li>
                        <li><Link to='/dashboard/wishlist'>MyWishList</Link></li>
                        <li><Link to='/dashboard/order'>MyOrder</Link></li>
                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashboard/allseller'>All Seller</Link></li>
                                <li><Link to='/dashboard/allbuyer'>All Buyer</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>



            <Footer></Footer>
        </div>
    );
};

export default DashboradLayout;