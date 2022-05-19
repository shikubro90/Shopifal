import React, { useEffect, useState } from 'react';

const Product_section = () => {

    const [products, setProducts ] = useState([])
    
    useEffect(()=>{
        fetch('https://dummyjson.com/products/search?q=phone')
        .then(res => res.json())
        .then(productData=>set);
    },[]);

    console.log(products);

    return (
        <div>
            
        </div>
    );
};

export default Product_section;