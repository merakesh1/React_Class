import React from 'react'

const Demo2 = () => {
    const [a, setA] =React.useState({
        name: 'John',
        age: 30,
        city: 'New York'
    })
    const handleData = () => {
        setA(prevState=>{
            return {
                ...prevState,name:"rohit"
            }
        })
        console.log(a)
    }
  return (
    <>
      <button onClick={handleData}>click</button>
    </>
  )
}

export default Demo2
