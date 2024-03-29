import React, { useContext } from 'react';
import toast from 'react-hot-toast';

import { useQuery } from 'react-query';
import { userAuth } from '../../AuthProvider/AuthProvider';
import DetailsAddedProducts from './DetailsAddedProducts';

const MyAddedProduct = () => {
    // const [products,setProduct]=useState([])
    const {user}=useContext(userAuth)
    console.log(user,'line 10');

   const url=`https://sell-phones-server-morshed0099.vercel.app/addedproducts?email=${user?.email}`
    const {data:products=[],refetch}=useQuery({
        queryKey:['products',user?.email],
        queryFn:async()=>{
            const res=await fetch(url);
            const data=await res.json()
            return data
        }
        
    })
    // useEffect(() => {
    //     fetch(`https://sell-phones-server-morshed0099.vercel.app/products?email=${user?.email}`)
    //     .then(res=>res.json())
    //     .then(data=>setProduct(data))
    // }, [user?.email])
    refetch();
    const handelDelete=(product)=>{
       const {_id}=product
       const yes=window.confirm('are you sure delete !!')
       if (yes){
        fetch(`https://sell-phones-server-morshed0099.vercel.app/products/${_id}`,{
            method:"DELETE",
            headers:{"content-type":"application/json"}
        })
        .then(res=>res.json())
        .then(data=>
            {console.log(data);
                // if(data.acknowledged){
                //     toast.success('delete successfully')
                //     
                // }
            })
    }
    }
    const handelToFeauter=(product)=>{
        fetch('https://sell-phones-server-morshed0099.vercel.app/advertise',{
            method:"POST",
            headers:{"content-type":"application/json"},            
            body:JSON.stringify(product)
        })
        .then(res=>res.json(product))
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                toast.success('added succesfully')
            }else{
                toast.error(data.message)
            }
        })
    }
    return (
        <div className='mr-4 ml-4'>
            <h1 className='text-center text-2xl font-bold mt-2 mb-2'>Your ALL Product</h1>
          <div className='m-6 p-4 gap-4 mx-auto grid grid-cols-1  md:grid-cols-2'>
          {
                products.map(product=><DetailsAddedProducts
                 key={product._id}
                 product={product}
                 handelDelete={handelDelete}
                 handelToFeauter={handelToFeauter}
                ></DetailsAddedProducts>)            }
          </div>
        </div>
    );
};

export default MyAddedProduct;