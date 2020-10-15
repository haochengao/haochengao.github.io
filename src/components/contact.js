import React from 'react';
import { Box, Button, TextField } from '@material-ui/core';
import axios from 'axios';
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
            organizationField: null,
            subjectField: null,
            buttonString: 'Submit',
            buttonDisabled: false,
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
    organizationFieldChange(event) {
        event.preventDefault();
        this.setState({
          organizationField: event.target.value,
        });
    }
    subjectFieldChange(event) {
        event.preventDefault();
        this.setState({
          subjectField: event.target.value,
        });
    }
    sendMessage = async () => {
        try {
            //button sending state
            this.setState({buttonDisabled: true, buttonString: 'Message Sending'})
            this.state.buttonDisabled = true;
            this.state.buttonString = 'Message Sending';
            const resp = await axios.post('https://boiling-tundra-49280.herokuapp.com/contact_form/messages/', {
                'time': String(new Date()),
                'organization': String(this.state.organizationField),
                'name': String(this.state.nameField),
                'email': String(this.state.emailField),
                'subject': String(this.state.subjectField),
                'message': String(this.state.messageField)
              });
              console.log(resp.data);
              this.setState({buttonString: 'Message Sent'})
            //button message received state
        } catch (err) {
            this.setState({buttonDisabled: true, buttonString: 'Error, please reload page and try again'})
            console.error(err);
        }
          //alert('Message Sent')
    }

    render() {
        return(
            <div style={{width:'500px', marginBottom: '15px', marginLeft: '40px', marginRight: '40px'}}>
                <TextField label='Organization (Optional)' fullWidth={true} onChange={(e) => this.organizationFieldChange(e)}/>
                <TextField required label='Name' fullWidth={true} onChange={(e) => this.nameFieldChange(e)}/>
                <TextField required label='Return Email' fullWidth={true} onChange={(e) => this.emailFieldChange(e)}/>
                <TextField label='Subject (Optional)' fullWidth={true} onChange={(e) => this.subjectFieldChange(e)}/>
                <TextField required style={styles.large} rows={8} multiline={true} label='Message' fullWidth={true} variant='outlined'onChange={(e) => this.messageFieldChange(e)}/>
                <Box style={{display: 'flex', justifyContent:'center', marginTop: '15px',}}>
                    <Button size='large' onClick={this.sendMessage} style={{border: "1px solid rgb(212, 212, 212)",}} disabled={this.state.buttonDisabled || !(this.state.nameField && this.state.emailField && this.state.messageField)}>
                        {this.state.nameField && this.state.emailField && this.state.messageField ? this.state.buttonString : 'Please fill out all required fields'}
                    </Button>
                </Box>
            </div>
        );
    }
}
//namefield, emailfield, message field all true is disabled
//also disabled when sending