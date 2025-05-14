import React from 'react'
import {Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Child = ({products, setTotalprice}) => {
    const handleAdd = ()=>{
      let total = 0;
      products.forEach((item) => {
        total += item.price;
      });
      setTotalprice(total)
  }

  return (
    <>
    <div style={{gap: "20px" }}>
     <h1>I am Child Component</h1>
    <table>
      <tbody>
        {products.map((item, idx) => (
          <tr key={idx}>
            <td>Price {item.price}</td>
          </tr>
        ))}
        <tr>
          <td><Button variant="primary" onClick={handleAdd}>Add All and Return to Parent</Button></td>
        </tr>
      </tbody>
    </table>
    </div>
    </>
  )
}

export default Child