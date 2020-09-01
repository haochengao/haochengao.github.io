import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles, Button } from '@material-ui/core';
import BETR from '../image/betr.png';
import E3S from '../image/e3s.jpg';
import InternetDrone from '../image/internetdrone.jpg';
import Soundcleaner from '../image/soundcleaner.jpg';
import CalSol from '../image/calsol.jpg';
import Website from '../image/website.jpg';

import { Link } from 'react-router-dom';
function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
const styles = {
  tabContainerLeft: {
    display: 'flex',
    height: '500px',
    width: '850px',
    //backgroundColor: 'blue',
    outline: '2px solid green',
    outlineOffset: '3px',
  },
  tabContainerRight: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: '500px',
    width: '850px',
    outline: '2px solid green',
    outlineOffset: '3px',
  },
  tab: {
    fontSize: '20px',
    textTransform: 'none',
    border: "1px solid rgb(212, 212, 212)",
    color: 'green',
    width: '230px'
  },
  tabPanel: {
    display:'flex', 
    alignItems:'center',
    width: '600px',
    margin: '20px',
    marginTop: '10px',
    justifyContent: 'center',
  },
  tabHeader: {
    marginTop: '20px', 
    fontSize: '20px', 
    color:'green', 
    display:'flex', 
    alignItems:'center', 
    justifyContent:'center'
  },
  tabHeader2: {
    marginBottom: '0px',
    marginTop: '5px',  
    color:'grey', 
    display:'flex', 
    alignItems:'center', 
    justifyContent:'center'
  },
  tabBody: {
    width: '600px',
    margin: '20px',
  }
}

const useStyle = makeStyles({
  indicator: {
    left: "0px"
  }
});

export function WorkExperienceTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box boxShadow={20} style={styles.tabContainerLeft}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        style={{
          marginTop: '50px'
        }}
      >
        <Tab style = {styles.tab} label="Berkeley Emerging Technologies Research Center" {...a11yProps(0)} />
        <Tab style = {styles.tab} label="Center for Energy Efficient Electronics" {...a11yProps(1)} />
      </Tabs>
      <TabPanel style={styles.tabPanel} value={value} index={0}>
        <Typography style={styles.tabHeader}>Berkeley Emerging Technologies Research Center</Typography>
        <Typography style={styles.tabHeader2}>Web Developer</Typography>
        <Typography style={styles.tabPanel}>
          I've worked at the BETR Center as a web developer since May 2020. In this time, I've conducting an absolute website rehaul for the Center, updating site to both a modern design and functionality.
          In this experience, I've had to learn to develop, re-write, and bug-fix code for the Wordpress Stack, as to allow other Center employees editing accessibility with its easy UI. 
          Our new website launches in October!
        </Typography>
        <Button style={styles.tabPanel} onClick={() => { window.open('https://betr.berkeley.edu') }}>
          <Box style={{marginTop: '50px', height: '100px', width:'200px', backgroundImage: `url(${BETR})`}}/>
        </Button>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Typography style={styles.tabHeader}>Center for Energy Efficient Electronics</Typography>
      <Typography style={styles.tabHeader2}>Educational Video Producer</Typography>
        <Typography style={styles.tabPanel}>
          I worked for E3S from April 2019 until May 2020. During my time there, I handled making edits to the website code whenever a custom detail was necessary.
          My other responsibility was the production of educational videos on Electrical Engineering, ranging from K12 level videos on capacitors that I scripted and filmed, to the production
          of industry/graduate-level research seminars by esteemed speakers.
        </Typography>
        <Button style={styles.tabPanel} onClick={() => { window.open('https://e3s-center.berkeley.edu') }}>
          <Box style={{height: '200px', width:'425px', backgroundImage: `url(${E3S})`}}/>
        </Button>
      </TabPanel>
    </Box>
  );
}

export function ProjectTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyle();

  return (
    <Box boxShadow={20} style={styles.tabContainerRight}>
      <TabPanel style={styles.tabPanel} value={value} index={0}>
      <Typography style={styles.tabHeader}>Internet Drone</Typography>
        <Typography style={styles.tabPanel}>
          In this project, I hooked a drone a Django backend webservice to constantly provide latitude and longitude coordinates
          for the drone to fly to. These coordinates come from a React frontend using the Google Maps API for user input. The React frontend
          also displays the drone telemetry data, also through the Django webservice. First person view and keyboard flight coming soon.
        </Typography>
        <Box style={styles.tabPanel}>
          <Link to='/internetdrone' styles={{display: 'flex', justifyContent:'center'}}>
            <Box style={{height: '221px', width:'400px', backgroundImage: `url(${InternetDrone})`}}/>
          </Link>
        </Box>
      </TabPanel>
      <TabPanel style={styles.tabPanel} value={value} index={1}>
        <Typography style={styles.tabHeader}>Soundcleaner</Typography>
        <Typography style={styles.tabPanel}>
          Soundcleaner takes 2 user audio files, and removes the second audio signal from the first signal, no matter where in the first signal the second signal appears.
          This application is based on Audio Finger Printing, a system for identifying audio with time-frequency analysis. A react frontend takes the user input and passes it onto 
          a Django backend webservice, which then processes the data using NumPy and SciPy. The cleaned audio signal then is given back to the React frontend.
        </Typography>
        <Box style={styles.tabPanel}>
          <Link to='/soundcleaner' styles={{display: 'flex', justifyContent:'center'}}>
            <Box style={{height: '169px', width:'350px', backgroundImage: `url(${Soundcleaner})`}}/>
          </Link>
        </Box>
      </TabPanel>
      <TabPanel style={styles.tabPanel} value={value} index={2}>
        <Typography style={styles.tabHeader}>Solar Car (CalSol)</Typography>
        <Typography style={styles.tabPanel}>
          This is where I spent most of my time in my first two years of college: designing and fabricating a solar car. Specifically,
          I worked mostly on parts involving aerodynamics: the outer shell and battery ventilation. In this team, I spent countless hours
          setting up and validating aerodynamic simulations in Solidworks and Ansys, as well as grueling hours of hand-sanding carbon fiber in a full respirator.
        </Typography>
        <Button style={styles.tabPanel} onClick={() => { window.open('https://calsol.berkeley.edu') }}>
          <Box style={{height: '250px', width:'425px', backgroundImage: `url(${CalSol})`}}/>
        </Button>
      </TabPanel>
      <TabPanel style={styles.tabPanel} value={value} index={3}>
      <Typography style={styles.tabHeader}>Soundcleaner</Typography>
        <Typography style={styles.tabPanel}>
          I made this as my inaugural React learning project and as a hub for other projects. The site itself is hosted on Github Pages and all backend services are hosted on Heroku. 
        </Typography>
        <Box style={styles.tabPanel}>
          <Link to='/' exact styles={{display: 'flex', justifyContent:'center'}}>
            <Box style={{marginTop: '50px', height: '200px', width:'400px', backgroundImage: `url(${Website})`}}/>
          </Link>
        </Box>
      </TabPanel>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        classes={{
          indicator: classes.indicator
        }}
        style={{marginTop: '50px'}}
      >
        <Tab style={styles.tab} label="Internet Drone" {...a11yProps(0)} />
        <Tab style={styles.tab} label="Soundcleaner" {...a11yProps(1)} />
        <Tab style={styles.tab} label="Solar Car (CalSol)" {...a11yProps(2)} />
        <Tab style={styles.tab} label="This Website" {...a11yProps(3)} />
      </Tabs>
    </Box>
  );
}
