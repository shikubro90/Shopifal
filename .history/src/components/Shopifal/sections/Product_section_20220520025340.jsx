import React, { useEffect, useState } from 'react';
import SingleProduct from '../snippet/SingleProduct'

const Product_section = () => {

    const [products,setProducts] = useState([])
    
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    },[]);

    return (
        <div>
            <h2>All Products</h2>
            {
                products.map((datas)=>(
                    <SingleProduct data= />
                ))

            }
        </div>
    );
};

export default Product_section;