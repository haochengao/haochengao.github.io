import React from 'react';
import { Box, Button, TextField } from '@material-ui/core';

const styles = {
    large: {
        marginTop: '20px',
    },
}

export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nameField: null,
            emailField: null,
            messageField: null,
        }
    }

    nameFieldChange(event) {
        event.preventDefault();
        this.setState({
          nameField: event.target.value,
        });
    }
    emailFieldChange(event) {
        event.preventDefault();
        this.setState({
          emailField: event.target.value,
        });
    }
    messageFieldChange(event) {
        event.preventDefault();
        this.setState({
          messageField: event.target.value,
        });
    }

    render() {
        return(
            <div style={{width:'500px', marginBottom: '15px', marginLeft: '40px', marginRight: '40px'}}>
                <TextField label='Organization (Optional)' fullWidth={true}/>
                <TextField required label='Name' fullWidth={true} onChange={(e) => this.nameFieldChange(e)}/>
                <TextField required label='Return Email' fullWidth={true} onChange={(e) => this.emailFieldChange(e)}/>
                <TextField label='Subject (Optional)' fullWidth={true}/>
                <TextField required style={styles.large} rows={8} multiline={true} label='Message' fullWidth={true} variant='outlined'onChange={(e) => this.messageFieldChange(e)}/>
                <Box style={{display: 'flex', justifyContent:'center', marginTop: '15px',}}>
                    <Button size='large' style={{border: "1px solid rgb(212, 212, 212)",}} disabled={!(this.state.nameField && this.state.emailField && this.state.messageField)}>
                        {this.state.nameField && this.state.emailField && this.state.messageField ? 'Submit' : 'Please fill out all required fields'}
                    </Button>
                </Box>
            </div>
        );
    }
}