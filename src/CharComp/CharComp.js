import React from 'react'
import './CharComp.css'

const charComp = (props) => {
    const div1Style = {
        display: `inline-block`,
        textAlign: `center`,
        border: `2px solid #6D6`,
        backgroundColor: `#DADDEE`,
        padding: `15px`,
        margin: `15px`,
        animation: `rotate-hor-center 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both`
      }
  
    return(
        <div onClick={props.clicked} style={div1Style}>{props.charVal}</div>
    )
}

export default charComp