import React, { useMemo } from 'react'

function UseMemoEx() {
    const [count,setCount]=React.useState(0)
    
    const calculate=useMemo(()=>{
        console.log("calculating...")
        return (count*count*count)/2+1
    },[count])

    const handleClick=()=>{
        setCount(prev=>prev+1)
    }
  return (
    <>
      <h1>state:{count}</h1>
      <h1>{calculate}</h1>  
      <button onClick={handleClick}>inc count</button>
    </>
  )
}

export default UseMemoEx
