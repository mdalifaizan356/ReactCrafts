import React from 'react'
import Child from './Child'

const Parent = () => {
    const products = [
        {
          id: 1,
          name: "Classic Backpack",
          price: "₹1,299"
        },
        {
          id: 2,
          name: "Leather Wallet",
          price: "₹799"
        },
        {
          id: 3,
          name: "Sunglasses",
          price: "₹999",
        }
      ];

  return (
    <>
    <Child products={products} />
    </>
  )
}

export default Parent