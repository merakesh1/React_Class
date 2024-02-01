import React, { useContext } from 'react'
import { context } from './ContextTheme';

const Navbar = () => {
    const {data,setData,handleState}=useContext(context);
    return (
        <>
            <div className='p-2' style={{background:data.background,color:data.color,display:"flex",justifyContent:"space-between",alignContent:"center",borderBottom:"2px solid red"}} >
                <span className="navbar-brand mb-0 h1 text-center" style={{marginLeft:"10px"}}>Navbar</span>
                <button className='btn btn-primary btn-sm' style={{marginRight:"40px"}} onClick={handleState}>{data.color}</button>
            </div>
        </>
    )
}

export default Navbar
