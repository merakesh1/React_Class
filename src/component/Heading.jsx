import React from 'react'

const display = () => {
  console.log("display")
}
const Heading = () => {
  const [count, setCount] = React.useState(0)
  display()
  const f1 = () => {
    console.log("f1")
  }
  console.log("heading")
  return (
    <div>
      Mern Class-{count}
      <button onClick={()=>setCount(count + 1)}>click</button>
    </div>
  )
}

export default React.memo(Heading)
