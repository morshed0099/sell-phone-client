import React from 'react';
import UserTable from '../../Shered/UserTble/UserTable';

import {  useQuery } from 'react-query'
import toast from 'react-hot-toast';


const AllBuyer = () => {
 
      
       const {data:allusers=[],refetch}=useQuery({
        queryKey:["allusers"],        
        queryFn:async()=>{
            const res=await fetch('https://sell-phones-server-morshed0099.vercel.app/users/buyer')
           const data=await res.json()
            return data
        }

       })

       refetch()

       const deleteUser=(users)=>{
        const yes= window.confirm('are you sure detele user ?')
        if (yes){
            fetch(`https://sell-phones-server-morshed0099.vercel.app/users/buyer/${users?._id}`,{
                method:"DELETE",
                headers:{"content-type":"application/json"}
            })
            .then(res=>res.json())
            .then(data=>
                {
                    if(data.acknowledged){
                        toast.success('delete successfully')
                    }
                })
        }

       }

      const handelUpdate=(users)=>{
        const status={status:true}
       fetch(`https://sell-phones-server-morshed0099.vercel.app/users/buyer/${users?._id}`,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(status),
       })
       .then(res=>res.json())
       .then(data=>{
        if(data.acknowledged){
            toast.success('updated succesfuly')
        }
       })
      }
    return (
        <div>
            <h1>ALL Buyers</h1>


            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>IMge</th>
                            <th>name</th>
                            <th>email</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            allusers.map(users => <UserTable
                                key={users.id}
                                users={users}
                                handelUpdate={handelUpdate}
                                deleteUser={deleteUser}
                            >
                            </UserTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyer;