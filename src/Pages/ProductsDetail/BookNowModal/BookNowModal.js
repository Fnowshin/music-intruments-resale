import React from 'react';

const BookNowModal = ({bookProduct}) => {
    const {product_name, picture, resalePrice } = bookProduct;

    const handleBooking = event => {
        event.preventDefault();
        const form =event.target;
        const price = form.price.value;
        const location = form.location.value;
        const phone = form.phone.value;
        const email = form.email.value;

        const booking = {
            productName: product_name,
            price: price,
            location: location,
            phone,
            email
        }

        console.log(booking);

    }
    return (
        <>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕
                </label>
                <h3 className="mb-6 text-lg font-bold">{product_name}</h3>
                <img src={picture} alt="" width={120} />
                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-6'>
                    <input type="text" name='price' placeholder="Type here" disabled value= {resalePrice} className="input input-bordered w-full" />
                    
                    <input name='location' type="text" placeholder="Meeting Location" className="input input-bordered w-full" />
                    <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                    <input name='email' type="text" placeholder="Email" className="input input-bordered w-full" />
                        <input className="btn btn-accent w-full" type='submit' value='Submit'/>
                </form>
            </div>
        </div>
    </>
    );
};

export default BookNowModal;