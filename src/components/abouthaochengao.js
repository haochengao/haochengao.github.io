import React from 'react';
import { Box, Typography } from '@material-ui/core';

const styles = {
    aboutParagraph: {
        width: '685px',
        height: '270px',
        outline: '2px solid green',

    }
}

export default function AboutHaochenGao() {
    return(
        <Box boxShadow={20} style={styles.aboutParagraph}>
            <Box style={{backgroundColor: 'green'}}>
                <Typography style={{color: 'white', fontSize: '40px', marginLeft: '7px'}}>Hello!</Typography>
            </Box>
            <Typography style={{fontSize: '22px', margin: '7px'}}>
                I'm a third year undergrad at UC Berkeley studying Electrical Engineering and Computer Science. My current interests lie in full stack development, robotics/ai/controls, and aerospace.
                Much of my time is spent trying, futiley, to empty my project idea backlog, learning a bit more about how the technological world functions with every project.
            </Typography>
        </Box>
    )
}