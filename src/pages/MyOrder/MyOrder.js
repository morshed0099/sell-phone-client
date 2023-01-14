import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { userAuth } from '../../AuthProvider/AuthProvider';
import MyOrderTable from './MyOrderTable';

const MyOrder = () => {
    const { user } = useContext(userAuth);

    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch(`https://sell-phones-server-morshed0099.vercel.app/bookings?email=${user?.email}`)
            const data = await res.json()
            return data

        }

    })
    console.log(bookings);
    return (
        <div className='mr-4 ml-4'>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>                           
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map(book =><MyOrderTable
                            key={book._id}
                            book={book}
                            refetch={refetch}
                            ></MyOrderTable>)
                        }
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default MyOrder;