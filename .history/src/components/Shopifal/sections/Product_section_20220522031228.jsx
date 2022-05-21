import React, { useEffect, useState } from 'react';
import Products from '../data_source/Products.json'
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
        <div>
            <h2>All Products</h2>
            <div>    
                {
                    products.map((single_products)=>(<SingleProduct key={single_products.Id} single_products={single_products}/>))
                }
            </div>
        </div>
    );
};

export default Product_section;