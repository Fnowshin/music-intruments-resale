import React from 'react';

const ProductDetail = ({ product }) => {
    const { picture, category_name, resalePrice, originalPrice, yearOfUse, sellerName, details} = product;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='w-120 h-80' src={picture} alt="Movie" /></figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{category_name}</h2>
                <div className='text-left font-semibold'>
                <p> Resale Price: BDT{resalePrice}</p>
                <p> Original Price: BDT{originalPrice}</p>
                <p>Time of Use: {yearOfUse}</p>
                <p>Seller Name: {sellerName}</p>
                <p>Details About the Product:{details}</p>
                </div>
                <div className="card-actions ">
                    <button className="btn btn-primary ">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;