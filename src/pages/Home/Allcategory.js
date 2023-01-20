import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Allcategory = () => {
   const [allCategoy,setCatagory]=useState([])

   useEffect(()=>{
    fetch('https://sell-phones-server-morshed0099.vercel.app/categories')
    .then(res=>res.json())
    .then(data=>setCatagory(data))
   },[])
      
    return (
        <div className='max-w-[1100px] mx-auto'>
            <h1 className='text-center text-3xl font-bold mt-6 mb-3'>All Category Band</h1>
            <div className='border-t-2 border-b-2  text-center text-orange-600 font-bold text-2xl flex flex-col justify-center md:flex-row md:justify-around mt-6 mb-7' >
              
            {
                allCategoy.map(category=><Link to={`/category/${category._id}`}><h1 className='p-4' key={category.category_id}>{category.category_name}</h1></Link>)
            }
          
        </div>
        </div>
    );
};

export default Allcategory;