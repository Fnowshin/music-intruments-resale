import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { toast } from "react-hot-toast";

const BookNowModal = ({bookProduct, setBookProduct}) => {
    const {product_name, picture, resalePrice } = bookProduct;
    const {user} = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form =event.target;
        const price = form.price.value;
        const location = form.location.value;
        const phone = form.phone.value;
        const name = form.name.value;
        const email = form.email.value;

        const booking = {
            productName: product_name,
            price: price,
            location: location,
            phone,
            name,
            email
        }

        fetch('http://localhost:5000/bookings/:id', {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.acknowledged) {
                setBookProduct(null);
                toast.success('Booking Confirmed');
            }
           
            
        })

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
                    <input name='name' type="text" placeholder="name" defaultValue={user?.displayName} disabled className="input input-bordered w-full" />
                    <input name='email' type="text" placeholder="Email" defaultValue={user?.email} disabled className="input input-bordered w-full" />
                        <input className="btn btn-accent w-full" type='submit' value='Submit'/>
                </form>
            </div>
        </div>
    </>
    );
};

export default BookNowModal;