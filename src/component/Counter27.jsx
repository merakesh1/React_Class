import React from 'react';

const Counter27 = (props) => {
    console.log(props.name)
  return (
    <>
      <button onClick={props.handleClick}>click-{props.count}</button>
    </>
  )
}

export default React.memo(Counter27)
