import React, { useEffect, useState } from 'react';

const Product_section = () => {

    const [products, setProduct ] = useState([])
    
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/20')
        .then(res=>res.json())
        .then(productData=>setProduct(productData))
    },[])

    console.log(pro);

    return (
        <div>
            
        </div>
    );
};

export default Product_section;