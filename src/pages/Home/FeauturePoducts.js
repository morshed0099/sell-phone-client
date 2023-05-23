import React from 'react';
import { useQuery } from 'react-query';
import Addvertise from './Addvertise';





const FeauturePoducts = () => {
    // const [products, setProducts] = useState([])  

    const {data:products=[],refetch}=useQuery({
        queryKey:['products'],
        queryFn:async()=>{
            const res= await fetch('https://sell-phones-server-morshed0099.vercel.app/advertises')
            const data=await res.json()
            return data;
        }
    })
   

 

    return (
        <div className='mt-6 mb-3'>
            <h1 className='text-3xl text-center lg:mt-8 mt-4 lg:mb:6 mb-4 font-bold ml-3'>Feauter Products</h1>
            <div className='  gap-4 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
               {
                products.map(product=><Addvertise
                key={product._id}
                product={product}
               
                ></Addvertise>)
               }
             
            </div>
        </div>
    );
};

export default FeauturePoducts;