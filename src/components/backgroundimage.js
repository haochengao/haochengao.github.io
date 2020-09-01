import React from 'react';
import { Box } from '@material-ui/core';
import Image from './main.png'; // Import using relative path

const styles = {
    bgImage: {
        backgroundImage: `url(${Image})`,
        height: 700,
        //width: 100,
        alignSelf: 'stretch',
        margin: 0,
        padding: 0,
    }
};

export default function BackgroundImage() {
    return(
        <Box style={styles.bgImage}>
        </Box>
    )
}