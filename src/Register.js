import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Login from './LoginForm'
class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      company_name:'',
      contact_number:'',
      email:'',
      password:''
    }
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Register"
           />
           <TextField
             hintText="Enter your Name"
             floatingLabelText="Name"
             onChange = {(event,newValue) => this.setState({name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Companies Name"
             floatingLabelText="Company Name"
             onChange = {(event,newValue) => this.setState({company_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Contact Number"
             floatingLabelText="Contact Number"
             onChange = {(event,newValue) => this.setState({contact_number:newValue})}
           />
           <br/>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }

  handleClick(event){
      var apiBaseUrl = "http://localhost:8080/api/v1";
      console.log("values",this.state.first_name,this.state.last_name,this.state.email,this.state.password);
      //To be done:check for empty values before hitting submit
      var self = this;
      var payload={
          name: this.state.name,
          companyName:this.state.company_name,
          contactNumber: this.state.contact_number,
          email:this.state.email,
          password:this.state.password
      }
      axios.post(apiBaseUrl+'/signup', payload, {
                  headers: {
                        "Content-Type": "application/json"
                  }
              })
     .then(function (response) {
       console.log(response);
//       if(response.data.code == 200){
//        //  console.log("registration successfull");
//         var loginscreen=[];
//         loginscreen.push(<Login parentContext={this}/>);
//         var loginmessage = "Not Registered yet.Go to registration";
//         self.props.parentContext.setState({loginscreen:loginscreen,
//         loginmessage:loginmessage,
//         buttonLabel:"Register",
//         isLogin:true
//          });
//       }
     })
     .catch(function (error) {
       console.log(error);
     });
    }
  }
const style = {
  margin: 15,
};
export default Register;
