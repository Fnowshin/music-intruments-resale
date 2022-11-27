import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const MyOrders = (props) => {

  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings =[] } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    }
  })

  return (
    <section>
      <div> <h1> My Orders </h1></div>
      <div className="overflow-x-auto m-8">
        <table className="table w-full ">

          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Price </th>
              <th>Pay </th>
            </tr>
          </thead>
          <tbody>
            {
              bookings.map((booking, i )=>
                <tr className="hover">
                  <th>{i+1}</th>
                  <td>{booking.productName}</td>
                  <td>{booking.price}</td>
                  <td>Purple</td>
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