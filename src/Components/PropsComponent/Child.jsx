import React from 'react'

const Child = ({products}) => {
    console.log("Child component props:", products); // ✅ Check this


  return (
    <>
    <div style={{ display: "flex", gap: "20px" }}>
      {products.map((item) => (
        <div key= {item.id}>
        <ul>
            <li>{item.name}</li>
            <li>{item.price}</li>
        </ul>
        </div>
      ))}
    </div>
    </>
  )
}

export default Child