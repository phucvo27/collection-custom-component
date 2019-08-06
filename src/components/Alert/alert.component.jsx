import React from 'react';

import './alert.style.scss';


const Alert = ({isSuccess, message})=>{
    return (
        <div className={`alert alert--${isSuccess ? 'success' : 'error'}`}>
            <p>{message}</p>
        </div>
    )
}

export default Alert;