import React from 'react';
import ProductCard from ''

const SingleProduct = (props) => {
    
    const {Id, img, Title} = props.single_products

    console.log(props);

    return (
        <div>
            {Id}
        </div>
    );
};

export default SingleProduct;