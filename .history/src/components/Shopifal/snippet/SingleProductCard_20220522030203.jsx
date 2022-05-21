import React from 'react';
import '../assets/SingleProductCard.style.css'
import { Button, Card } from 'react-bootstrap';

const SingleProductCard = (props) => {
    
    const {Id, img, Title, Price, Description} = props.single_products

    console.log(props);

    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title className="title_color">{Title}</Card.Title>
                <Card.Title classNae> ${Price}</Card.Title>
                <Card.Text>
                {Description}
                </Card.Text>
                <Button variant="primary">Add To Cart</Button>
            </Card.Body>
            </Card>
        </div>
    );
};

export default SingleProductCard;