import { useState } from "react";
import products from "./data.js";

const Products = () => {
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(0);

  return (
    <>
      <h2>Product Components</h2>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <p>{product.title}</p>
            <p>{product.price}</p>
          </div>
        );
      })}
    </>
  );
};

export default Products;
