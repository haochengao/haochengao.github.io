import React from 'react';
import { Avatar } from '@material-ui/core';
import gmail from "../image/gmail-512.webp";
import linkedin from "../image/linkedin-512.webp";
import github from "../image/github-512.webp";
import twitter from "../image/twitter-512.webp";
import facebook from "../image/facebook-512.png";
import instagram from "../image/instagram-512.png";

const styles = {
    socialMenu: {
        display: 'flex',
        width: '375px',
        justifyContent: 'center',
    },
    avatar: {
        cursor: 'pointer',
        margin: '10px',
    }
}

export default function SocialMediaMenu() {
    return(
        <div style={styles.socialMenu}>
            <Avatar src={gmail} style={styles.avatar} onClick={() => {window.open('mailto:haochengao@gmail.com')}}/>
            <Avatar src={linkedin} style={styles.avatar} onClick={() => {window.open('https://linkedin.com/in/haochengao')}}/>
            <Avatar src={github} style={styles.avatar} onClick={() => {window.open('https://github.com/haochengao')}}/>
            <Avatar src={twitter} style={styles.avatar} onClick={() => {window.open('https://twitter.com/gaohaochen')}}/>
            <Avatar src={facebook} style={styles.avatar} onClick={() => {window.open('https://facebook.com/haochengao1')}}/>
            <Avatar src={instagram} style={styles.avatar} onClick={() => {window.open('https://instagram.com/haochengao/')}}/>
        </div>
    )
}