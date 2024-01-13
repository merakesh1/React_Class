import React, { useState } from 'react'
import Button from './Button';

const Counter = () => {
    const [count, setCount] = useState(0)
    let interval=null;
    const incrementCounter = () => {
        interval=setInterval(() => {
            setCount((count)=>{
                return count+1
            })
        },10)
    }

    const stopCounter = () => {
        clearInterval(interval)
    }

    return (
        <>
            <h1 style={{ color: 'red', textAlign: 'center' }}>Counter</h1>
            <p style={{ textAlign: 'center', fontSize: "30px" }}>{count}</p>
            <div style={{ textAlign: 'center'}}>
                <Button a={incrementCounter} text="start" color="green"/>&nbsp;&nbsp;
                <Button a={stopCounter} text="stop" color="red"/>
            </div>
        </>
    )
}

export default Counter
