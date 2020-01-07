import React from 'react';

const compStyle = {
    border: `2px dotted #6F6`,
    margin: `5px`,
    padding: `5px`,
}

const userInput = (props) => {
    return (
        <input style={compStyle} type="text" onChange={props.changed} value={props.value} ></input>
    )
}

export default userInput;