import React from 'react'

const ShowCounter = (props) => {
    console.log(props.text)
  return (
    <div>
      {props.count1}
    </div>
  )
}

export default React.memo(ShowCounter)
