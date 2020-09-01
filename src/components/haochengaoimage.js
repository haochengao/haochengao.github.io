import React from 'react';
import { Box } from '@material-ui/core';
import Image from '../image/haochengao.png';

const styles = {
    profileImage: {
        backgroundImage: `url(${Image})`,
        height: '400px',
        width: '300px',
        outline: '2px solid green',
        outlineOffset: '3px',
        //marginLeft: '53px',
        marginRight: '56px'
        //alignSelf: 'stretch',
    }
};

export default function HaochenGaoImage() {
    return(
        <Box boxShadow={20} style={styles.profileImage}>
        </Box>
    )
}