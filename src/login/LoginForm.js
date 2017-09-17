import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Login"
                        />
                        <TextField
                            hintText="Enter your Username"
                            floatingLabelText="Username"
                            onChange={(event, newValue) => this.setState({username: newValue})}
                        />
                        <br/>
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange={(event, newValue) => this.setState({password: newValue})}
                        />
                        <br/>
                        <RaisedButton label="Submit" primary={true} style={style}
                                      onClick={(event) => this.handleClick(event)}/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }


    handleClick() {
        var apiBaseUrl = "http://localhost:8080/api/v1";
        var params = new URLSearchParams();
        params.append('companyName', this.state.username);
        params.append('password', this.state.password);
        axios.post(apiBaseUrl + '/login', params, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
            .then(function (response) {
                console.log(response);
                console.log(response.status)
                if (response.status == 200) {
                    console.log("Login successful");
                    alert("Login successful");
                }
                else if (response.status == 204) {
                    console.log("Username password do not match");
                    alert("username password do not match");
                }
                else {
                    console.log("Username does not exist");
                    alert("Username does not exist");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

const style = {
    margin: 15,
};

export default LoginForm;