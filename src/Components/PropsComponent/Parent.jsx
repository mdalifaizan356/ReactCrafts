import React, { useState } from 'react';
import {Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Child from './Child'

const Parent = () => {
    const products = [
        {
          id: 1,
          name: "Classic Backpack",
          price: 1299
        },
        {
          id: 2,
          name: "Leather Wallet",
          price: 799
        },
        {
          id: 3,
          name: "Sunglasses",
          price: 999,
        }
      ];

      const  [totalprice, setTotalprice] = useState("");
  return (
    <>
          <Row className="mt-5 d-flex">
          <Col>
           <div style={{ gap: "20px" }}>
     <h1>I am Parent </h1>
      {products.map((item) => (
        <div key= {item.id}>
        <ul>
            <li>Product Name {item.name}</li>
            <li>Product Price {item.price}</li>
        </ul>
        </div>
      ))}
      <h1>Total Price Calculte by Child Component {totalprice}</h1>
    </div>
          </Col>
            <Col>
              <Child products={products} setTotalprice={setTotalprice} />
            </Col>
          </Row>
    </>
  )
}

export default Parent