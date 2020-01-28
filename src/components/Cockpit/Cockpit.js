/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef, useContext } from 'react'
import cockpitCSS from './Cockpit.module.css'
import AuthContext from '../../context/auth-context'

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);
  
  useEffect( () => {
    //   console.log('Cockpit -- useEffect - only on toggle')
    // [props.personVisible]
    toggleBtnRef.current.click();
      return () => {
        console.log('Cockpit -- cleanup work...')      
      }
},[]);

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
                onClick={props.clicked}
                ref={toggleBtnRef}
            >
                {props.children}
            </button>


            <button 
            children="Please Login" 
            onClick={authContext.login}
            style={{backgroundColor:`#EEE`,padding: `5px`}} 
            />

        </div>
    )
}

export default cockpit;

/* <AuthContext.Consumer>
{ 
    context => 
    <button 
    children="Sign In" 
    onClick={context.login}
    style={{backgroundColor:`#EEE`,padding: `5px`}} 
    />
}
</AuthContext.Consumer> */
