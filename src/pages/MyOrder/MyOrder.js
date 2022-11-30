import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { userAuth } from '../../AuthProvider/AuthProvider';

const MyOrder = () => {
    const {user}=useContext(userAuth);

    const {data:bookings=[],refetch}=useQuery({
          queryKey:['bookings'],
          queryFn:async()=>{
            const res=await fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            const data=await res.json()
            return data

          }

    })
    // console.log(bookings);
    return (
        <div>
            {
                bookings.map(book=>console.log(book))
            }
        </div>
    );
};

export default MyOrder;