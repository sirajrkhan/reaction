import React from 'react'

const person = (props) => {
    return (
        <div className={props.styled}>
            <p onClick={props.click}>I am {props.name} ... and I am {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person