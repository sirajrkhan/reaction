import React from 'react'
import cockpitCSS from './Cockpit.module.css'

const cockpit = (props) => {
    let btnClass = [cockpitCSS.btn01];
    return (
        <div>
            <h1>{props.heading}</h1>
            <button 
                className={btnClass.join(' ')} 
                onClick={props.clicked}>
                {props.children}
            </button>
        </div>
    )
}

export default cockpit;