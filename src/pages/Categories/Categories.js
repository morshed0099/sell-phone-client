import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductBookModal from '../../Shered/ProductBookModal/ProductBookModal';
import ProductCard from '../Home/Home/ProductCard';

const Categories = () => {
    const products = useLoaderData()
   const [book,setBook]=useState([])
    
    return (
        <div>
            <h1>this is category wise page</h1>
            <div className='p-6  grid grid-col-1 md:grid-flow-col-2 lg:grid-cols-3 gap-5 mx-auto max-w-[1400px] w-[90%]'>
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                        setBook={setBook}
                    ></ProductCard>)
                }
               <ProductBookModal  
                key={1+1} 
                book={book}            
               ></ProductBookModal>
            </div>
        </div>
    );
};

export default Categories;