import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';



const AllBuyers = (props) => {

   


    const { data: buyers =[], refetch} = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
          const res = await fetch('https://music-instrument-server.vercel.app/buyers');
          const data = await res.json();
          return data;
        }
      });

      const handleDeleteBuyer = id => {
        fetch(`https://music-instrument-server.vercel.app/buyers/${id}`, {
          method: 'DELETE', 
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0 ){
            refetch()
            toast.success('Buyer Deleted Successfully.')
        }

        })
      }

    return (
        <section>
        <div> <h1> All Buyers  </h1></div>
        <div className="overflow-x-auto m-8">
          <table className="table w-full ">
  
            <thead>
              <tr>
                <th></th>
                <th>Buyer Name</th>
                <th>Email </th>
               
                <th>Delete </th>
              </tr>
            </thead>
            <tbody>
              {
                buyers &&
                buyers.map((buyer, i )=>
                  <tr className="hover" 
                  key={buyer._id}>
                    <th>{i+1}</th>
                    <td>{buyer.userInfo.displayName}</td>
                    <td>{buyer.userInfo.email}</td>
                    
                    <td><button  onClick={() => handleDeleteBuyer(buyer._id)}className='btn btn-sm btn-danger'> Delete Buyers </button></td>
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