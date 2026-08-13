import { Profiler, useState } from "react";
import products from "./data.js";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Products = () => {
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(0);

  return (
    <>
      <h2>Product Components</h2>
      {products.map((product) => {
        return (
          // <div key={product.id}>
          //   <p>{product.title}</p>
          //   <p>{product.price}</p>
          // </div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Price: {product.price}</ListGroup.Item>
              <ListGroup.Item>Category: {product.category}</ListGroup.Item>
              <ListGroup.Item>Rating: {product.rating.rate}</ListGroup.Item>
            </ListGroup>
            {/* <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body> */}
          </Card>
        );
      })}
    </>
  );
};

export default Products;
