import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductDetail from './ProductDetail';

const ProductsDetail = (props) => {
    const products = useLoaderData();
    

    return (
        <div className='my-20'>
         <div className='text-center'>
            
            <h2 className='text-2xl font-bold text-primary'> {products.length} Products are Available </h2>
            
        
    </div>
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {
            products.map(product => <ProductDetail
                key={product._id}
                product={product}
            ></ProductDetail>)
        }
    </div>
       </div>
    );
};

export default ProductsDetail;