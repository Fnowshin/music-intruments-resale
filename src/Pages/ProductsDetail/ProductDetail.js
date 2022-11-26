import React from 'react';

const ProductDetail = ({ product, setBookProduct }) => {
    const { picture, product_name, resalePrice, originalPrice, yearOfUse, sellerName } = product;

    return (
       <>
       <div className="card bg-base-100 shadow-xl">
            <figure><img className='w-120 h-80' src={picture} alt="Movie" /></figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{product_name}</h2>
                <div className='text-left font-semibold'>
                    <p> Resale Price: BDT{resalePrice}</p>
                    <p> Original Price: BDT{originalPrice}</p>
                    <p>Time of Use: {yearOfUse}</p>
                    <p>Seller Name: {sellerName}</p>
                    
                </div>
                <label
                    htmlFor="booking-modal"
                    onClick={() => setBookProduct(product)}
                    className="btn btn-primary text-white">Book Now
                </label>
            </div>
        </div>
       </>
    );
};

export default ProductDetail;