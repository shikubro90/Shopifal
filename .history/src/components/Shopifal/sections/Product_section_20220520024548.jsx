import React, { useEffect, useState } from 'react';

const Product_section = () => {

    const [products, setProducts ] = useState([])
    
    useEffect(()=>{
        fetch('https://dummyjson.com/products/search?q=phone')
        .then(res => res.json())
        .then(productData=>setProducts(productData));
    },[]);

    return (
        <div>
            <h2>All Products</h2>
            {products.map((single_product)=>(
                <h1>single_product</h1>
            ))}
        </div>
    );
};

export default Product_section;