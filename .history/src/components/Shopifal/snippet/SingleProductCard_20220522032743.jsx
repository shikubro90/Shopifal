import React from 'react';
import '../assets/SingleProductCard.style.css'
import { Button, Card, Dropdown } from 'react-bootstrap';

const SingleProductCard = (props) => {
    
    const {Id, img, Title, Price, Description} = props.single_products

    console.log(props);

    return (
        <div>
            <Card style={{ width: '18rem', max-height:  }}>
            <Card.Img className='imageRatio' variant="top" src={img} />
            <Card.Body>
                <div className='display_flex'>
                    <Card.Title className="title_color">{Title}</Card.Title>
                    <Card.Title className="price_text"> ${Price}</Card.Title>
                </div>
                <hr></hr>
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