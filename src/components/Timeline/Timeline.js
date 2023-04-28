import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
// import WorkIcon from '@mui/icons-material/Work';

import "./Timeline.css"
import { Typography } from '@mui/material';

const CustomTimeline = ({title, icon, children}) => {
    return (
        // Item Header
        <Timeline className={'timeline'}>
            <TimelineItem className={'timelineFirstItem'}>
                <TimelineSeparator>
                    <TimelineDot className={'timelineDotHeader'}>
                        {icon}
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant='h6' className={'timelineHeader'}>
                        {title}
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            {children}
            {/* Remaining Item */}
        </Timeline>
    
    );
};

export const CustomTimelineSeparator = () => (
    <TimelineSeparator classname={'separatorPadding'}>
        <TimelineDot variant={'outlined'} className={'timelineDot'}></TimelineDot>
        <TimelineConnector/>
    </TimelineSeparator>
);

export default CustomTimeline