import React, { useEffect, useState } from 'react';
import SingleProduct from '../snippet/SingleProduct'

const Product_section = () => {

    const [products,setProducts] = useState()
    
    useEffect(()=>{
        fetch('https://dummyjson.com/products/search?q=phone')
        .then(res => res.json())
        .then(productData=>setProducts(productData));
    },[]);

    return (
        <div>
            <h2>All Products</h2>
            {
                products.map((datas)=>(
                    <SingleProduct/>
                ))

            }
        </div>
    );
};

export default Product_section;