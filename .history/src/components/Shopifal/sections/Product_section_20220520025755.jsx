import React, { useEffect, useState } from 'react';
import SingleProduct from '../snippet/SingleProduct'

const Product_section = () => {

    const [products,setProducts] = useState([])
    
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    },[]);

    console.log(products);

    return (
        <div>
            <h2>All Products</h2>
            {
                products.map((datas,index)=>(
                    <SingleProduct datas={index} />
                ))

            }
        </div>
    );
};

export default Product_section;