import React, { useContext } from 'react'
import {context} from "../context";
import Counter from './Counter';

const ButtonContext = () => {
  const [user,handleClick]=useContext(context)
  return (
    <div>
      <button onClick={handleClick}>{user}</button>
      <Counter/>
    </div>
  )
}

export default ButtonContext
