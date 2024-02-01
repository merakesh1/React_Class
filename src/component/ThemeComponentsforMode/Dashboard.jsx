import React, { useContext } from 'react'
import { context } from './ContextTheme';

const Dashboard = () => {
  const {data}=useContext(context);
  return (
    <>
      <p className='text-center' style={{color:data.color,backgroundColor:data.background,height:"620px"}}>
        This is Dashboard
      </p>
    </>
  )
}

export default Dashboard
