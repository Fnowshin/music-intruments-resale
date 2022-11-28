import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';


const AllBuyers = (props) => {

   


    const { data: buyers =[]} = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
          const res = await fetch('http://localhost:5000/buyers');
          const data = await res.json();
          return data;
        }
      });

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