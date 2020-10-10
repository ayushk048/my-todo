import React from 'react'
import './Button.css'

const Button = (props) => {
    const classesBtn = ['Button', props.btnType];
    return (
        <button
            className={classesBtn.join(' ')}
            onClick={props.clicked}>
            {props.children}
        </button>
    )
}

export default Button
