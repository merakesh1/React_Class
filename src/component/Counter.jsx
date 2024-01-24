import React, { useState ,useContext} from 'react'
import Button from './Button';
import { context } from '../context';

const Counter = () => {
    const data=useContext(context)
    const [count, setCount] = useState(0)
    var interval=React.useRef(null);

    const incrementCounter = () => {
        interval.current=setInterval(() => {
            setCount((count)=>{
                return count+1
            })
        },10)
    }

    const stopCounter = () => {
        clearInterval(interval.current)
        setCount(0)
    }

    return (
        <>
            <h1 style={{ color: 'red', textAlign: 'center' }}>Counter-{data[0]}</h1>
            <p style={{ textAlign: 'center', fontSize: "30px" }}>{count}</p>
            <div style={{ textAlign: 'center'}}>
                <Button a={incrementCounter} text="start" color="green"/>&nbsp;&nbsp;
                <Button a={stopCounter} text="stop" color="red"/>
            </div>
        </>
    )
}

export default Counter
