import React, { useEffect, useState } from 'react';

const Product_section = () => {

    const [product, setProduct ] = useState()
    
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/20')
        .then(res=>res.json())
        .then(product=>console.log(json))
    },[])


    return (
        <div>
            
        </div>
    );
};

export default Product_section;