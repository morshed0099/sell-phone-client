import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { userAuth } from '../../AuthProvider/AuthProvider';
import MyOrderTable from './MyOrderTable';

const MyOrder = () => {
    const { user } = useContext(userAuth);

    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            const data = await res.json()
            return data

        }

    })
    console.log(bookings);
    return (
        <div>
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
                            ></MyOrderTable>)
                        }
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default MyOrder;