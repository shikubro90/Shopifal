import React from 'react';

const SingleProduct = (props) => {
    const {id, Title, img} = props.single_products;
    return (
        <div>
            {id}  
        </div>
    );
};

export default SingleProduct;