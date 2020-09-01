import React from 'react';
import { Box, Button, Typography, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Header from './header'
import Menu from './menu'
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
}));
  
function UploadButtons() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <input accept="audio/wav" className={classes.input} id="contained-button-file" type="file"/>
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            Upload Minuend
          </Button>
        </label>
        <input accept="image/*" style={{display:'none'}} id="icon-button-file" type="file" />
        <label htmlFor="icon-button-file">
          <IconButton color="primary" aria-label="upload picture" component="span">
            Upload Subtrahend
          </IconButton>
        </label>
      </div>
    );
}

export default class Soundcleaner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            subtrahend: false,
            mineuend: false,
            difference: false,
        }
    }

    componentDidMount() {
        document.title = "Soundcleaner - Haochen Gao"
    }
    render() {
        return (
            <Box>
            <Box style={{display: 'flex', borderBottom: "3px solid rgb(212, 212, 212)", marginTop: '0px', marginLeft: '50px', marginRight: '50px'}}>
                <Header/>
            <Menu/>
            </Box>
            <Box style={{fontSize: '24px', marginTop: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
                Upload minuend and subtrahend then click = to process. Your cleaned sound will be available shortly.
            </Box>
                <Box>
                    <Box style={{outline: '2px solid green', outlineOffset: '3px', marginLeft: '80px', marginRight: '80px', marginBottom: '50px', marginTop: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
                    <input accept="audio/wav" style={{display: 'none'}} id="minuend-upload" type="file"/>
                    <label htmlFor="minuend-upload">
                        <Button style={{backgroundColor: 'green', color: 'white', fontSize: '35px', textTransform: 'none'}} variant="contained" component="span">
                            Upload Minuend
                        </Button>
                    </label>
                    <Typography style={{color: 'green', fontSize: '60px', margin: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        -
                    </Typography>
                    <input accept="audio/wav" style={{display: 'none'}} id="subtrahend-upload" type="file"/>
                    <label htmlFor="subtrahend-upload">
                        <Button style={{backgroundColor: 'green', color: 'white', fontSize: '35px', textTransform: 'none'}} variant="contained" component="span">
                            Upload Subtrahend
                        </Button>
                    </label>
                    <Button disabled={true} variant="contained" component="span" style={{backgroundColor: 'green', color: 'white', fontSize: '35px', margin: '10px'}}>
                        =
                    </Button>
                    <Button disabled={true} style={{fontSize: '35px', textTransform: 'none', backgroundColor: 'green', color: 'white'}} onClick={this.downloadClick} variant="contained" component="span">
                        Download
                    </Button>
                </Box>
                </Box>
                <Box style={{marginTop: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    Currently limited to cases where first file completely contains the second file.
                </Box>
                <Box style={{marginTop: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    How it works: uses audio fingerprinting and frequencies patterns to identify temporal location of subtrahend in minuend, then subtracts the signals to produce a cleaned audio file.
                </Box>
                <Box style={{marginTop: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Typography>
                        Inspired by &nbsp;
                    </Typography>
                    <Typography style={{textDecoration: 'underline'}}onClick={() => { window.open('https://github.com/worldveil/dejavu') }}>
                        https://github.com/worldveil/dejavu
                    </Typography>
                    <Typography>
                        &nbsp;and UC Berkeley's Electrical Engineering 120
                    </Typography>
                </Box>
            </Box>
        )
    }
}