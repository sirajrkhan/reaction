import React from 'react'
import './UserOutput.css'

const userOutput = (props) => {
    return(
        <div className="outputBox">
            <p>{props.username}</p>
            <p>This is some paragraph</p>
        </div>
    )
}

export default userOutput;