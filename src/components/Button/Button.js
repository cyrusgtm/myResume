import React from 'react'
import Button from '@mui/material/Button'
import './Button.css'

const Buttn = ({text, icon}) => {
    return (
        <Button className="customBtn" endIcon={icon ? (
            <div className='btnIconContainer'>
                {icon}
            </div>
        ) : null}>
            <span className='btnText'>
                {text}
            </span>
        </Button>
    )
}

export default Buttn;