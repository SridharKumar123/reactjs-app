import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import HelloWorldService from '../../api/todo/HelloWorldService.js'

class WelcomeComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            welcomeMessage : ''
        }
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
        this.handleSuccessResponse = this.handleSuccessResponse.bind(this)
        this.handleError = this.handleError.bind(this)
    }
    render(){
        return (
        <>
            <h1>Welcome</h1>
            <div className="container">
                Welcome {this.props.match.params.name}. View the Todo details <Link to="/todos">here!</Link>
            </div>
            <div className="container">
                Click here for welcome message 
                <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Welcome Message</button>
            </div>
            <div className="container">
                {this.state.welcomeMessage}
            </div>
        </>
        );
        
    }

    retrieveWelcomeMessage(){
       // HelloWorldService.executeHelloWorldService()
       // .then(response => this.handleSuccessResponse(response))

       //HelloWorldService.executeHelloWorldBeanService().
       //then(response => this.handleSuccessResponse(response))

       HelloWorldService.executeHelloWorldPathService(this.props.match.params.name).
       then(response => this.handleSuccessResponse(response))
       .catch(error => this.handleError(error))
    }

    handleSuccessResponse(response){
        this.setState({
            welcomeMessage : response.data.message
        })
        
    }

    handleError(error){
        console.log(error.response);
        let errorMessage = ''
        if(error.message){
            errorMessage +=error.message
        }
        if(error.response && error.response.data){
            errorMessage += error.response.data.message;
        }
        this.setState({
            welcomeMessage : errorMessage
        })
        
    }
}



export default WelcomeComponent
