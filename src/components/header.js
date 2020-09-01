import React from 'react';
import { Button, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';



export default class Header extends React.Component {
    styles = {
        title1: {
            textAlign: 'left',
            fontFamily: 'arial',
            textTransform: 'none',
            fontSize: '65px',
            //fontWeight: 'bold',
            lineHeight: '1',
            color: 'grey'
            //color: this.state.hovered ? 'grey' : 'green',
            //fontWeight: '30'
        },
        title2: {
            textAlign: 'right',
            fontFamily: 'arial',
            textTransform: 'none',
            fontSize: '90px',
            //fontWeight: 'bold',
            lineHeight: '1',
            color: 'green'
            //color: this.state.hovered ? 'black' : 'green'
        },
        button: {
            height: '185px',
            paddingLeft: '40px',
            paddingRight: '20px',
            paddingTop: '20px',
            paddingBottom: '20px',
            display: 'block',
            alignContent: 'left',
            width: '400px'
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            hovered: false,
        }
        this.onHover = this.onHover.bind(this);
        this.onUnhover = this.onUnhover.bind(this)
    }

    onHover(e) {
        e.target.style.background = 'transparent';
        this.setState({hovered: true})
    }
    
    onUnhover(e) {
        e.target.style.background = 'transparent';
        this.setState({hovered: false})
    }
    

    render() {
        return(
            <Link to="/" style={{ textDecoration: 'none' }}>
                <Button style={this.styles.button} onMouseOver={this.onHover} onMouseOut={this.onUnhover} disableRipple={true}>
                    <Box style={this.styles.title1}>
                    Haochen
                    </Box>
                    <Box style={this.styles.title2}>
                        Gao
                    </Box>
                </Button>
            </Link>
        )
    }
}