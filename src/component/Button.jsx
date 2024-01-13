import React from 'react'

const Button = (props) => {
  return (
    <>
      <button onClick={props.a} style={{ margin: "auto", padding: "10px", borderRadius: "10px", backgroundColor:props.color, color: "white"}}>{props.text}</button>
    </>
  )
}

export default Button
