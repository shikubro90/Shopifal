import React from 'react';
import { Button, Card } from 'react-bootstrap';

const SingleProductCard = (props) => {
    
    const {Id, img, Title} = props.single_products

    console.log(props);

    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Add To Cart</Button>
            </Card.Body>
            </Card>
        </div>
    );
};

export default SingleProductCard;