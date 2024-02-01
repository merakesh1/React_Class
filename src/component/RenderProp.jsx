import React from 'react'

const RenderProp = (props) => {
    const [name,setName]=React.useState("");
    const handleChange = (e) => {
        setName(e.target.value);
        props.abcFunction(e.target.value)
    }

  return (
    <div>
        <input type="text" id='todo'onChange={handleChange} value={name}/>
        {
          props.designFunction("mern")
        }
    </div>
  )
}

export default RenderProp
