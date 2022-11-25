import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { image, category_name,category_id } = category

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img src={image} alt="" /></figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{category_name}</h2>
          <div className="card-actions">
            <Link to={`/productsdetail/${category_id}`}>
            <button className="btn btn-primary">View Products</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Category;