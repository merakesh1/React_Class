import React from 'react';

const MouseEvent27 = (props) => {
    return (
        <div>
            <p onMouseOver={props.handleClick} style={{ border: "2px solid red", padding: "10px" }}>Mern-{props.count}</p>
        </div>
    )
}

export default React.memo(MouseEvent27)
