import React from 'react'
import {Link} from 'react-router-dom'

const Navbar1 = () => {
  return (
    <>
      <div className='p-2' style={{ background: "black", color: "white", display: "flex", justifyContent: "space-between", alignContent: "center", borderBottom: "2px solid red" }} >
          <span className="navbar-brand mb-0 h1 text-center" style={{ marginLeft: "10px" }}>Navbar</span>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <button className='btn btn-primary btn-sm' style={{ marginRight: "40px" }}>search</button>
        </div>
    </>
  )
}

export default Navbar1
