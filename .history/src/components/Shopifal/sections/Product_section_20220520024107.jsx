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
            {products.map((singleProduct)=>{
                return(
                    <h1>singleProduct</h1>
                )
            })
        </div>
    );
};

export default Product_section;