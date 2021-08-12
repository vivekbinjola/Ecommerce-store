import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  const { image, _id, name, rating, numReviews, price } = product;
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${_id}`}>
        <Card.Img src={image} variant="top" />
      </Link>

      <Card.Body>
        <Link
          to={`/product/${_id}`}
          style={{ textDecoration: 'none', color: '#111' }}
        >
          <Card.Title as="div">
            <strong>{name}</strong>
          </Card.Title>
        </Link>

        {/* <Card.Text as='div' >
               {product.description}
             </Card.Text> */}

        <Card.Text as="div">
          <Rating value={rating} text={`${numReviews} reviews`} />
        </Card.Text>

        <Card.Text as="h3">${price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
