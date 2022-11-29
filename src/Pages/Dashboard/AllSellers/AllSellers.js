import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = (props) => {

    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await fetch('https://music-instrument-server.vercel.app/users');
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmin = id => {
        fetch(`https://music-instrument-server.vercel.app/users/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
              refetch();
            
        })
      }
    

    const handleDeleteUser = id => {
      fetch(`https://music-instrument-server.vercel.app/users/${id}`, {
        method: 'DELETE', 
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0 ){
            refetch();
            toast.success('Seller deleted successfully.')
        }
       
      })
    }
    

    return (
        <section>
        <div> <h1> All Users/ Sellers </h1></div>
        <div className="overflow-x-auto m-8">
          <table className="table w-full ">
  
            <thead>
              <tr>
                <th></th>
                <th>User Name</th>
                <th>Email </th>
                <th>Admin </th>
                <th>Delete </th>
              </tr>
            </thead>
            <tbody>
              {
                users &&
                users.map((user, i )=>
                  <tr className="hover" 
                  key={user._id}>
                    <th>{i+1}</th>
                    <td>{user?.name}</td>
                    <td>{user.email}</td>
                    <td>{ user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-sm btn-primary'> Make Admin </button>}</td>
                    <td><button  onClick={() => handleDeleteUser(user._id)}className='btn btn-sm btn-danger'> Delete Seller </button></td>
                  </tr>
                )
              }
  
            </tbody>
          </table>
        </div>
      </section>
    );
};

export default AllSellers;