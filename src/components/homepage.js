import React from 'react';
import { WorkExperienceTabs, ProjectTabs } from './tabs';
import Menu from './menu';
import Header from './header';
import HaochenGaoImage from './haochengaoimage'
import AboutHaochenGao from './abouthaochengao'
import SocialMediaMenu from './socialmediamenu'
import { Box, Typography } from '@material-ui/core'
import Contact from './contact'
//import './index.css'

const styles = {
  aboutBox: {
    display: 'flex',
    marginLeft: '50px',
    marginRight: '50px',
    marginTop: '33px',
    marginBottom: '20px',
    alignItems: 'center',
    justifyContent: 'center',
    // justifyContent: "center",
    // alignItems: "center",
    // align: 'center'
  }
}

export default class Homepage extends React.Component {


  componentDidMount() {
    document.title = "Haochen Gao"
  }

  render() {
    return(
      <div>
        {/* absolute positioning for css, use css in each class's const styles thing */}
        <Box id='about' style={{display: 'flex', borderBottom: "3px solid rgb(212, 212, 212)", marginTop: '0px', marginLeft: '50px', marginRight: '50px'}}>
          <Header/>
          <Menu/>
        </Box>
        <Box style={styles.aboutBox}>
          <HaochenGaoImage className={'profile-image'}/>
          <AboutHaochenGao className={'about-paragraph'}/>
        </Box>
        <Box id='work-experience' style={{display: 'flex', borderTop: "3px solid rgb(212, 212, 212)", paddingLeft: '144px', alignItems: 'center', justifyContent: 'left', marginTop: '33px', marginLeft:'50px', marginRight: '50px'}}>
          <Typography style={{fontSize: '40px', marginTop: '20px', color: 'green'}}>
            Where I've Worked
          </Typography>
        </Box>
        <Box style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '50px', marginRight: '50px', marginTop: '20px'}}>
          <WorkExperienceTabs />
        </Box>
        <Box id='projects' style={{display: 'flex', borderTop: "3px solid rgb(212, 212, 212)", paddingRight: '144px', alignItems: 'center', justifyContent: 'flex-end', marginTop: '33px', marginLeft:'50px', marginRight: '50px'}}>
          <Typography style={{fontSize: '40px', marginTop: '20px', color: 'green'}}>
            Projects I've Made
          </Typography>
        </Box>
        <Box style={{display: 'flex', alignItems: 'center', justifyContent: 'center',marginLeft: '50px', marginRight: '50px', marginTop: '20px'}}>
          <ProjectTabs/>
        </Box>
        <Box id='contact' style={{display: 'flex', borderTop: "3px solid rgb(212, 212, 212)", alignItems: 'center', justifyContent: 'center', marginTop: '33px', marginLeft:'50px', marginRight: '50px'}}>
          <Typography style={{fontSize: '40px', marginTop: '20px', color: 'green'}}>
            Contact Me
          </Typography>
        </Box>
        <Box style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '50px'}} className={'contact'}>
          <Box boxShadow={15} style= {{outline: '2px solid green', outlineOffset: '3px', margin: '50px', marginBottom:'159px',}} className={'contact-info'}>
            <SocialMediaMenu/>
          </Box>
          <Box boxShadow={15} style= {{outline: '2px solid green', outlineOffset: '3px', marginLeft: '110px'}}>
            <Contact className={'contact-form'} />
          </Box>
        </Box>
      </div>
    )
  }
}

