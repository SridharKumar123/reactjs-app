import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';
import { withRouter } from 'react-router';

class HeaderComponent extends Component{
    render(){
        const isLoggedIn = AuthenticationService.isUserLoggedIn()
        console.log(isLoggedIn);
        return( 
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div><a href="http://www.google.com" className="navbar-brand">Google</a></div>
                <ul className="navbar-nav">
                    {isLoggedIn && <li><Link className="nav-link" to="/welcome/user">Home</Link></li>}
                    {isLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    {!isLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                    {isLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                </ul>
            </nav>
        </header>            
        )
    }
}

export default withRouter(HeaderComponent)