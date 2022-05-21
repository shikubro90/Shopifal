import React, { useEffect, useState } from 'react';
import Products from '../data_source/Products.json'
import '../assets/Product_section.style.css'
import SingleProduct from '../snippet/SingleProductCard'

const Product_section = () => {

    const [products,setProducts] = useState([])
    
    // useEffect(()=>{
    //     fetch("https://restcountries.com/v3.1/all")
    //   .then((res) => res.json())
    //   .then((data) => setProducts(data));
    // },[]);

    useEffect(()=>{
        setProducts(Products)
    })

    return (
        <div className='text-align-center product_wrapper'>
            <h2 className='mb-4 font-wi'>All Products</h2>
            <div className='product_grid'>    
                {
                    products.map((single_products)=>(<SingleProduct key={single_products.Id} single_products={single_products}/>))
                }
            </div>
        </div>
    );
};

export default Product_section;