import React from 'react'

export default function ExampleRELKey() {
  /* const [count, setCount] = React.useState(0)
  var a=React.useRef(0)
  console.log(a)
  const handleClick = () => {
    setCount(prevcount =>prevcount + 1)
    a.current=count
  } */

  var a=React.useRef(0)
  const [count,setCount]=React.useState(0)


  const handleClick = () => {
    a.current++
  }
  return (
    <>  
        <h1>ref-{a.current}</h1>
        <button onClick={handleClick}>click for ref</button>
        <h1>state-{count}</h1>
        <button onClick={() => setCount(count+1)}>click for state</button>
    </>
  )
}
