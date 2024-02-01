import React, { Children, createContext, useState } from 'react'
export const context = createContext();

const ContextTheme = (props) => {
    const [data, setdata] = React.useState({
        background: "white",
        color: "black"
    })
    const handleState = () => {
        data.background === "white" ? setdata({ background: "black", color: "white" }) : setdata({ background: "white", color: "black" })
    }
    return (
        <context.Provider value={{data,setdata,handleState}}>
            {props.children}
        </context.Provider>
    )
}

export default ContextTheme
