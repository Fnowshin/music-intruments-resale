import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const AllBuyers = (props) => {

    const { user } = useContext(AuthContext);

    const url = 'http://localhost:5000/buyers';

    const { data: buyers =[] } = useQuery({
        queryKey: ['buyers', user?.email],
        queryFn: async () => {
          const res = await fetch(url);
          const data = await res.json();
          return data;
        }
      });

      const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/buyers/admin/${id}`, {
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
      }
    

    return (
        <section>
        <div> <h1> My Orders </h1></div>
        <div className="overflow-x-auto m-8">
          <table className="table w-full ">
  
            <thead>
              <tr>
                <th></th>
                <th>Buyer Name</th>
                <th>Email </th>
                <th>Admin </th>
                <th>Delete </th>
              </tr>
            </thead>
            <tbody>
              {
                buyers.map((buyer, i )=>
                  <tr className="hover" 
                  key={buyer._id}>
                    <th>{i+1}</th>
                    <td>{buyer.userInfo.displayName}</td>
                    <td>{buyer.userInfo.email}</td>
                    <td>{ buyer?.role !== 'admin' &&<button onClick={() => handleMakeAdmin(buyer._id)} className='btn btn-sm btn-primary'> Make Admin </button>}</td>
                    <td><button className='btn btn-sm btn-danger'> Delete Buyer </button></td>
                  </tr>
                )
              }
  
            </tbody>
          </table>
        </div>
      </section>
    );
};

export default AllBuyers;