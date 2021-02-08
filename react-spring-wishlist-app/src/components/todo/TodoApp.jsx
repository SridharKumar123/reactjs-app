import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute.jsx';
import LoginComponent from './LoginComponent.jsx'
import TodoListComponent from './TodoListComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import ErrorComponent from './ErrorComponent.jsx';
import LogoutComponent from './LogoutComponent.jsx';
import WelcomeComponent from './WelcomeComponent.jsx';
import FooterComponent from './FooterComponent.jsx';
import TodoComponent from './TodoComponent.jsx';

class TodoApp extends Component{
    render(){
        return (
        <div className="TodoApp">  
            <Router>
                <HeaderComponent/>
                <Switch>
                <Route path="/" exact component={LoginComponent}/>   
                <Route path="/login" component={LoginComponent}/>
                <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                <AuthenticatedRoute path="/todos/:id" component={TodoComponent}/>
                <AuthenticatedRoute path="/todos" component={TodoListComponent}/>
                <AuthenticatedRoute path="/logout" component={LogoutComponent}/>                
                <Route component={ErrorComponent}/>
                </Switch>
                <FooterComponent/>
            </Router>         
            {/*<LoginComponent/>
            <WelcomeComponent/>*/}
        </div>
        );
    }
}

/*function ShowLoginFailed(props) 
{
    if(props.loginFailure){
        return <div>Invalid Creds</div>;
    }else{
        return null;
    }    
}

function LoginSuccessfull(props) {

    if(props.loginSuccess){
        return <div>Login Successful</div>;
    }else{
        return null;
    }
    
} */

export default TodoApp;