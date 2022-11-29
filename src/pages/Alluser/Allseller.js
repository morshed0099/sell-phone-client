import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import UserTable from '../../Shered/UserTble/UserTable';

const Allseller = () => {
    
    const {data:allusers=[],refetch}=useQuery({
        queryKey:["allusers"],        
        queryFn:async()=>{
            const res=await fetch('http://localhost:5000/users/seller')
           const data=await res.json()
            return data
        }

       })

       refetch()
    // useEffect(() => {
    //     fetch('http://localhost:5000/users/seller')
    //         .then(res => res.json())
    //         .then(data => setAllusers(data))
    // }, [])
    const deleteUser=(users)=>{
        const yes= window.confirm('are you sure detele user ?')
        if (yes){
            fetch(`http://localhost:5000/users/seller/${users?._id}`,{
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
       fetch(`http://localhost:5000/users/buyer/${users?._id}`,{
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
            <h1>All Sellers</h1>      
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
                    deleteUser={deleteUser}
                    handelUpdate={handelUpdate}
                >
                </UserTable>)
            }
                </tbody>
            </table>
        </div>   
           
           

        </div>
    );
};

export default Allseller;