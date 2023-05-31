import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { userAuth } from '../AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import DashBoardHeader from '../Shered/DashBoardHeader';
import Footer from '../Shered/Footer/Footer';
import Header from '../Shered/Header/Header';

const DashboradLayout = () => {
    const { user, loader } = useContext(userAuth);
    const [isAdmin, isAdminLoader] = useAdmin(user?.email)
    const [isSeller, isBuyerLoader] = useSeller(user?.email)
    const [isBuyer, setIsSellerLoader] = useBuyer(user?.email)


    return (
        <div>

            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-2 flex flex-col">
                    <DashBoardHeader></DashBoardHeader>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu  p-4 w-[200px] pt-12 bg-indigo-800 text-white">
                        <label htmlFor="my-drawer-2" className="lg:hidden flex justify-end cursor-pointer hover:text-red-400 transform translate-x-1 duration-400 ease-linear">X</label>

                        {
                            isAdminLoader ? <><h4 className='flex justify-center'>Loading .....</h4></> : <>
                                {
                                    isBuyer && <>
                                        <li><Link to='/dashboard/wishlist'>MyWishList</Link></li>
                                        <li><Link to='/dashboard/order'>MyOrder</Link></li>
                                    </>
                                }
                            </>
                        }


                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashboard/allseller'>All Seller</Link></li>
                                <li><Link to='/dashboard/allbuyer'>All Buyer</Link></li>
                            </>
                        }

                        {
                            isSeller &&
                            <>
                                <li><Link to='/dashboard/myproduct'>MyAddedProduct</Link></li>
                                <li><Link to='/dashboard/addproduct'>AddProduct</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboradLayout;