import React from 'react'
import './Resume.css'
import { Grid, Typography } from '@mui/material'
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline'
import resumeData from '../../utils/resumeData'
import WorkIcon from '@mui/icons-material/Work';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab'
import SchoolIcon from '@mui/icons-material/School';
import Paper from '@mui/material/Paper';



import { Icon } from '@mui/material';



const Resume = () => {
    return (
        // 
        <>
        {/* About me */}
        <Grid container className='section pb45'>
            <Grid item className='sectionTitle bottom30'>
                <span></span>
                <h6 className='sectionTitleText'>About Me</h6> 
            </Grid>
            <Grid item xs={12}>
                <Typography className='aboutmeText' variant='body2'>{resumeData.about}</Typography>
            </Grid>
        </Grid>

        {/* Education and experiences */}
        <Grid container className='section pb45 top60'>
            <Grid item className='sectionTitle bottom30'>
                <span></span>
                <h6 className='sectionTitleText'>Resume</h6> 
            </Grid>
            <Grid item xs={12}>
                <Grid container className='resumeTimeline'>
                    {/* Experiences */}
                    <Grid item sm={12} md={6}>
                        <CustomTimeline title="Work Experience" icon={<WorkIcon />} > 
                            {resumeData.experiences.map(experience => (
                                <TimelineItem className='workList'>
                                    <CustomTimelineSeparator />
                                    <TimelineContent className='timelineContent'>
                                        <Typography className='timelineTitle'>{experience.title}</Typography>
                                        <Typography variant='caption' className='timelineDate'>{experience.date}</Typography>
                                        <Typography variant='body2' className='timelineDescription'>{experience.description}</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </CustomTimeline>
                    </Grid>
                    {/* Education */}
                    <Grid item sm={12} md={6}>
                        <CustomTimeline title="Education" icon={<SchoolIcon />} > 
                            {resumeData.education.map(educations => (
                                <TimelineItem className='workList'>
                                    <CustomTimelineSeparator />
                                    <TimelineContent className='timelineContent'>
                                        <Typography className='timelineTitle'>{educations.title}</Typography>
                                        <Typography variant='caption' className='timelineDate'>{educations.date}</Typography>
                                        <Typography variant='body2' className='timelineDescription'>{educations.description}</Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </CustomTimeline>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

        {/* Services */}
        <Grid container className='section top60'>
            <Grid item className='sectionTitle bottom30'>
                <span></span>
                <h6 className='sectionTitleText'>My Services</h6>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={3} justify='center'>
                    {resumeData.services.map(service => (
                        <Grid item xs={12} sm={6} md={3}>
                            <div className='service'>
                                <Icon className='serviceIcon'>{service.icon}</Icon>
                                <Typography className='serviceTitle' variant='h6'>{service.title}</Typography>
                                <Typography className='serviceDescription' variant='body2'>{service.description}</Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

        </Grid> 

        {/* Skills */}
        <Grid container spacing={3} justify='space-between' className='section top20 graybg'>
            {resumeData.skills.map(skill => (
                <Grid item xs={12} sm={6} md={3}>
                    <Paper elevation={0} className='skill'>
                        <Typography variant='h6' className='skillTitle'>
                            {skill.title}
                        </Typography>
                        {skill.description.map(element => (
                            <Typography variant='body2' className='skillDescription'>
                                <TimelineDot variant={'outlined'} className='timelineDot'/>{element}
                            </Typography>
                        ))}
                    </Paper>

                </Grid>
            ))}

        </Grid> 
        </>
        
    )
}

export default Resume