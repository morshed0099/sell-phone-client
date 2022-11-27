import React, { useEffect, useState } from 'react';
import ProductBookModal from '../../Shered/ProductBookModal/ProductBookModal';

import ProductCard from './Home/ProductCard';

const FeauturePoducts = () => {
    const [products, setProducts] = useState([])
    const [book,setBook]=useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
      
    return (
        <div className=' mt-6 mb-3'>
            <h1 className='text-3xl font-bold ml-3'>Feauter Products</h1>
            <div className='m-6 p-3  gap-4 max-w[1400px] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

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

export default FeauturePoducts;