import React, { useEffect, useState } from 'react';

const Product_section = () => {

    const [product, setProduct ] = useState()
    
    useEffect(()=>{
        
            fetch('https://fakestoreapi.com/products/1')
        .then(res=>res.json())
        .then(json=>console.log(json))
        

    },[])

    return (
        <div>
            
        </div>
    );
};

export default Product_section;