import { Typography } from '@mui/material'
import React from 'react'
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline'
import resumeData from '../../utils/resumeData'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineItem from '@mui/lab/TimelineItem';
import Buttn from '../Button/Button'
 

import './Profile.css'
import DownloadIcon from '@mui/icons-material/Download';
// import { TimelineItem } from '@mui/lab';


const CustomTimelineItem = ({title, text, link}) =>(
    <TimelineItem className='timelineMargin'>
        <CustomTimelineSeparator/>
        <TimelineContent className="timelineContent">
            {link ? (
            <Typography className='timelineItemText'>
                <span><strong>{title}:</strong></span>{" "}
                <a href={link} target="blank">
                    {text}
                </a>
            </Typography>
            ) : (
                <Typography className='timelineItemText'>
                    <span><strong>{title}:</strong></span>{text}
                </Typography>
            )}
        </TimelineContent>
    </TimelineItem>
)

const Profile = () => {
    return (
        <div className='profileContainerShadow'>
            <div className='profileName'>
                <Typography className='name'>{resumeData.name}</Typography>
                <Typography className='title'>{resumeData.title}</Typography>
            </div>
            <figure className="profileImage">
                <img src={require('../../assets/images/CYRUS.JPG')} alt=""/>
            </figure>
            <div className="profileInformation">
                <CustomTimeline icon={<PermIdentityIcon />}>
                    <CustomTimelineItem  title='Name' text={resumeData.name}/>
                    <CustomTimelineItem  title='Title' text={resumeData.title} />
                    <CustomTimelineItem  title='Email' text={resumeData.email} />

                    {Object.keys(resumeData.socials).map((key) => (
                        <CustomTimelineItem title={key} text={resumeData.socials[key].text} link= {resumeData.socials[key].link}/>
                    ))}
                </CustomTimeline>
                <div className="button">
                <Buttn text={'Download CV'} icon={<DownloadIcon/>} />
                </div>
                
            </div>
        </div>
    )
}

export default Profile