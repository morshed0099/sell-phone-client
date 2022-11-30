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
            <div className='w-[90%] mx-auto grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3'>
                {
                    wishList.map(wish => <Wishlist
                        key={wish._id}
                        wish={wish}
                        setBook={setBook}
                    ></Wishlist>)
                }
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