import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Box, Button, Typography, View } from '@material-ui/core';
//import { View } from 'react-native';
import Header from './header';
import Menu from './menu';

const styles = {
  containerStyle: {
    width: 1080,
    height: 600,
    outline: '2px solid green',
    outlineOffset: '5px'
  },
  secondaryContainer: {
    marginTop: '20px',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "400",
  },

}

export default class MyComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
        //isLoaded: false,
        lastPos: {
          lat: 38.0469248,
          lng: -78.659584,
        },
        destPos: {
          lat: null,
          lng: null,
        },
        hasDest: false,
        droneOnline: false,
        buttonLabel: 'Drone Offline',
        buttonColor: 'red',
        telemetry: 'Drone Offline, Telemetry Disabled',
    };
    this.onMapClicked = this.onMapClicked.bind(this)
  }
  componentDidMount() {
    //if drone online, buttonLabel: 'Destination Not Chosen'
    document.title = 'Internet Drone - Haochen Gao'
  }

  onMapClicked(e) {
    this.setState({
      destPos: {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      },
      hasDest: true,
      buttonLabel: this.state.droneOnline ? 'Submit Flight' : 'Drone Offline',
      buttonColor: this.state.droneOnline ? 'green' : 'red',
    })
  }

  render() {
    return (
      <div>
        <Box style={{display: 'flex', borderBottom: "3px solid rgb(212, 212, 212)", marginTop: '0px', marginLeft: '50px', marginRight: '50px'}}>
          <Header/>
          <Menu/>
        </Box>    
        <LoadScript
          googleMapsApiKey="AIzaSyC2Cjel59eToCArKZViIQyc1vALEw0UGNU"
        > 
          <Box style={styles.secondaryContainer}>
            <Typography align='center' style={{color: 'green', fontSize: '26px', paddingBottom:'10px'}}>
              Click map to add destination marker, then submit your flight destination.
              <Typography align='center' style={{color: 'grey'}}>
              Flight submission and telemetry only available while drone is online.
              </Typography>
            </Typography>
          </Box>
          <Box style={styles.secondaryContainer}>
            <GoogleMap
              mapContainerStyle={styles.containerStyle}
              center={this.state.lastPos}
              zoom={10}
              onClick={this.onMapClicked}
            >
              { /* Child components, such as markers, info windows, etc. */ }
              <></>
              <Marker
                position={this.state.lastPos}
                title={"Last Known Drone Position"}
              >
              </Marker>
              <Marker
                position={this.state.destPos}
                title={"Destination Position"}
                visible={this.state.hasDest}
              >
              </Marker>
              <Box style={{display: "flex", justifyContent: "center", alignItems: "center", paddingTop: '10px'}}>
                <Button 
                  disabled={!this.state.hasDest || !this.state.droneOnline}
                  variant='contained'
                  style={{backgroundColor: 'white', color: this.state.buttonColor}}
                  >
                    {this.state.buttonLabel}
                </Button>
              </Box>
              <Box style={{display: "flex", justifyContent: "center", alignItems: "center", paddingTop: '20px'}}>
                <Typography>
                  {this.state.telemetry}
                </Typography>
              </Box>
            </GoogleMap>
          </Box>
          <Typography align='center' style={{fontSize: '13px', color: 'grey', paddingTop: '13px'}}>
              More features such as FPV and keyboard flight coming soon.
          </Typography>
        </LoadScript>
      </div>

    )
  }
}