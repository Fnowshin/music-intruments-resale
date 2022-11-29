import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const MyOrders = (props) => {

  const { user } = useContext(AuthContext);

  const url = `https://music-instrument-server.vercel.app/bookings?email=${user?.email}`;

  const { data: bookings =[] } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      });
      const data = await res.json();
      return data;
    }
  })

  return (
    <section>
      <div className='mt-8'> <h1 className='text-3xl font-semibold'> My Orders </h1></div>
      <div className="overflow-x-auto m-8">
        <table className="table w-full ">

          <thead>
            <tr>
              <th></th>
              <th>Product </th>
              <th>Product Name</th>
              <th>Price </th>
              <th>Pay </th>
              
            </tr>
          </thead>
          <tbody>
            {
             bookings && 
             bookings?.map((booking, i )=>
             <tr key={booking._id} className="hover">
               <th>{i+1}</th>
               <td>
               <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={booking.picture} alt="Tailwind CSS Component" />
              </div>
            </div>
            </div>
               </td>
               
               <td>{booking.productName}</td>
               <td>{booking.price}</td>
               <td><button className='btn btn-secondary'> Pay </button></td>
             </tr>
           )
            }

          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyOrders;