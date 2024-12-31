import React from 'react'

const ItemList = () => {
  const fruits = ["Mango", "Kiwi", "Orange", "Banana", "Apple","Mango", "Kiwi", "Orange", "Banana", "Apple"]
  return (
    <>
    <ul>
      {fruits.map((fruit, index)=>{
        return <li key={index}>{fruit}</li>
      })}
    </ul>
    </>
  )
}

export default ItemList