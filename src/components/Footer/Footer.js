import React from 'react'
import './Footer.css'
import { Typography } from '@mui/material'
import resumeData from '../../utils/resumeData'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footerLeft'>
                <Typography className="footerName">
                    {resumeData.name}
                </Typography>
            </div>
            <div className='footerRight'>
                <Typography className="footerCopyright">
                    Designed and Developed by Cyrus Gautam <br/>
                    Clone idea from <a href="https://themeforest.net/user/tavonline" target="blank">Travonline</a>
                </Typography>
            </div>
            
        </div>
    )
}

export default Footer