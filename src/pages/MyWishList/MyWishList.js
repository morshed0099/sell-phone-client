import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { userAuth } from '../../AuthProvider/AuthProvider';
import BookModal from '../Home/BookModal';
import Wishlist from './Wishlist';

const MyWishList = () => {
    const [book, setBook] = useState({})
    const { user } = useContext(userAuth)
    const { data: wishList = [] } = useQuery({
        queryKey: ['wishList', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/wishlist?email=${user?.email}`)
            const data = await res.json()
            return data;
        }
    })
    console.log(wishList);
    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                wishList.map(wish => <Wishlist
                                    key={wish._id}
                                    wish={wish}
                                    setBook={setBook}
                                ></Wishlist>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                {book &&
                    <BookModal
                        key={book._id}
                        bookProduct={book}
                    ></BookModal>}
            </div>
        </div>
    );
};

export default MyWishList;