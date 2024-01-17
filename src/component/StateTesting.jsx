import React from 'react'
import { useState } from 'react'

function StateTesting() {
  React.useEffect(()=>{
    console.log("componentDidMount")  
  })

  const [count,setCount]=useState("a")
  const handleClick=()=>{
    setCount("a")
  }
  
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>click</button>
    </>
  )
}

export default StateTesting
