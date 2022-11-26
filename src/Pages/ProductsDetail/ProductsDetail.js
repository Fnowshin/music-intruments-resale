import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookNowModal from './BookNowModal/BookNowModal';
import ProductDetail from './ProductDetail';

const ProductsDetail = (props) => {
    const products = useLoaderData();
    const [bookProduct, setBookProduct] = useState(null)


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
                        setBookProduct={setBookProduct}
                    ></ProductDetail>)
                }
            </div>
            {
                bookProduct &&
                <BookNowModal 
                bookProduct={bookProduct}
                >
              
                </BookNowModal>
            }
        </div>
    );
};

export default ProductsDetail;