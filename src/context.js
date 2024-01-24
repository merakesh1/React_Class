import React from "react"
export const context = React.createContext();

const ContextFunction = ({children}) => {
    const [user, setUser] = React.useState("rakesh")
    let a=10;
    const handleClick = () => {
        if(user === "rakesh"){
            setUser("kumar")
        }else{
            setUser("rakesh")
        }
    }
    return (
        <context.Provider value={[user,handleClick,a]}>
            {children}
        </context.Provider>
    )
}


export default ContextFunction