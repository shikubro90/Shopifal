import React, { useEffect, useState } from 'react';

const Product_section = () => {

    const [products, setProducts ] = useState([])
    
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/20')
        .then(res=>res.json())
        .then(productData=>setProducts(productData))
    },[]);

    console.log(products);

    return (
        <div>
            
        </div>
    );
};

export default Product_section;