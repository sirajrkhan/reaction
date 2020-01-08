import React from 'react'
import cockpitCSS from './Cockpit.module.css'

const cockpit = (props) => {
    let btnClass = [cockpitCSS.btn01];
    if (props.personVisible) {
        btnClass.push(cockpitCSS.btn02) 
    }
    return (
        <div>
            <h1>{props.heading}</h1>
            {/* {
                (props.personVisible) ?
                btnClass.push(cockpitCSS.btn02) 
                : null
            } */}
            <button 
                className={btnClass.join(' ')} 
                onClick={props.clicked}>
                {props.children}
            </button>
        </div>
    )
}

export default cockpit;