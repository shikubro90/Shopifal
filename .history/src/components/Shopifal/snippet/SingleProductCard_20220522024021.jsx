import React from 'react';
import SingleProductCard from '../snippet/ProductCard'

const SingleProductCard = (props) => {
    
    const {Id, img, Title} = props.single_products

    console.log(props);

    return (
        <div>
            {Id}
        </div>
    );
};

export default SingleProductCard;