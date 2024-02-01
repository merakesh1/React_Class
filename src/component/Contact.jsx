import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const nav=useNavigate();
    useEffect(() => {
      setTimeout(()=>{
        nav("/")
      },20000)
    },[])
  return (
    <div className='text-center'>
      Contact
    </div>
  )
}

export default Contact
