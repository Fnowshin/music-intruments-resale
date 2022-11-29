import React, { useEffect, useState } from 'react';
import Category from './Category';
import { useQuery } from '@tanstack/react-query'


const Categories = (props) => {

    const {data: categories = []} = useQuery( {
        queryKey: ['categories'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='my-32'>
         <div className='text-center'>
            
            <h4 className='font-bold text-primary'> INSTRUMENT CATEGORIES </h4>
            <h2 className='text-2xl font-semi bold'>Available Categories </h2>
        
    </div>
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {
            categories.map(category => <Category
                key={category.id}
                category={category}
            ></Category>)
        }
    </div>
       </div>
    );
};

export default Categories;