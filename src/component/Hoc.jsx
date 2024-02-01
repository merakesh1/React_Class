import React,{useState} from 'react'

const Hoc = (Component) => {
    const [count, setCount] = useState(0)
    console.log(count)
    const handleClick = () => {
        setCount(count + 1)
    }
    const componentFunction=(props)=>{
        return (
            <Component count={count} handleClick={handleClick} {...props}/>
        )
    }
    return componentFunction
}

export default Hoc

