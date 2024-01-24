import React from 'react'
const ShowButton = (props) => {
  console.log(props.text)
  return (
    <div>
      <button onClick={props.handleClick}>Click</button>
    </div>
  )
}

export default React.memo(ShowButton)
