import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService.js';

class LoginComponent extends Component{

    constructor(){
        super();
        this.state = {
            username : "Enter Username",
            password: '',
            hasLoginFailed : false,
            showSuccessMessage : false
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.loginAction = this.loginAction.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleUsernameChange(event){
        this.setState({
            username : event.target.value
        });
    }

    handlePasswordChange(event){
        this.setState({
            password: event.target.value
        });
    }

    loginAction(){
        /// login was hardcoded earlier. now moved to backend
    /*    if(this.state.username==='user' && this.state.password==='password'){
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`);
            //this.setState({showSuccessMessage:true});
            //this.setState({hasLoginFailed:false});
        }else{
            console.log("Failed");
            this.setState({showSuccessMessage:false});
            this.setState({hasLoginFailed:true});
        }  
        */
       // this is for basic auth service, where we pass username/password as header
       /*
        AuthenticationService
        .executeBasicAuthService(this.state.username,this.state.password)
        .then(
            () => {
                AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password);
                this.props.history.push(`/welcome/${this.state.username}`);
            }
        ).catch(
            () => {
                this.setState({showSuccessMessage:false});
                this.setState({hasLoginFailed:true});
            }
        )  */
        // here we pass POST req with username/password and get a JWT token
        AuthenticationService
        .executeJwtAuthService(this.state.username,this.state.password)
        .then(
            (response) => {
                AuthenticationService.registerSuccessfulLoginForJWT(this.state.username,
                    response.data.token); 
                this.props.history.push(`/welcome/${this.state.username}`);
            }
        ).catch(
            () => {
                this.setState({showSuccessMessage:false});
                this.setState({hasLoginFailed:true});
            }
        )
    }
    render(){
        return(
            <div>
                <h1>Login</h1>
                <div className="container">
                {/*<ShowLoginFailed loginFailure={this.state.hasLoginFailed} />            */}
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Creds</div>}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
                {/*<LoginSuccessfull loginSuccess={this.state.showSuccessMessage} />            */}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button className="btn btn=s" onClick={this.loginAction}>Login</button>
                </div>
            </div>
        );
    }
}

export default LoginComponent