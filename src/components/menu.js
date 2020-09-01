import React from 'react';
import { Box, ButtonGroup, Button } from '@material-ui/core';
import { HashLink } from 'react-router-hash-link';

const styles = {
    menugroup: {
        marginLeft: '185px',
        marginTop: '55px',
        textTransform: 'none',
    },
    singularButton: {
        background: 'transparent',
        textTransform: 'none',
        fontSize: '26px',
        paddingBottom: '2px',
        color: 'grey',
    },
    multipleButtons: {
    //    marginRight: 0,
    }
}

function onHover(e) {
    e.target.style.background = 'transparent';
    e.target.style.color = 'green';
    e.target.style.textDecoration = 'underline';
}

function onUnhover(e) {
    e.target.style.background = 'transparent';
    e.target.style.color = 'grey';
    e.target.style.textDecoration = 'none';
}

export default class Menu extends React.Component {

    componentDidMount() {

    }

    render() {
        return(
            <Box style={styles.menugroup}>
                <ButtonGroup style={styles.multipleButtons} disableElevation={true} disableRipple={true} variant='text'>
                    <HashLink style={{textDecoration:'none'}} to='/#about' exact>
                        <Button style={styles.singularButton} onMouseOver={onHover} onMouseOut={onUnhover}>
                            About
                        </Button>
                    </HashLink>
                    <HashLink style={{textDecoration:'none'}} to='/#work-experience' exact>
                        <Button style={styles.singularButton} onMouseOver={onHover} onMouseOut={onUnhover}>
                            Work Experience
                        </Button>
                    </HashLink>
                    <HashLink style={{textDecoration:'none'}} to='/#projects' exact>
                        <Button style={styles.singularButton} onMouseOver={onHover} onMouseOut={onUnhover}>
                            Projects
                        </Button>
                    </HashLink>
                    <HashLink style={{textDecoration:'none'}} to='/#contact' exact>
                        <Button style={styles.singularButton} onMouseOver={onHover} onMouseOut={onUnhover}>
                            Contact
                        </Button>
                    </HashLink>
                </ButtonGroup>
            </Box>
        )
    }
}