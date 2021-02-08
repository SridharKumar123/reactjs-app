import React, {Component} from 'react'
import moment from 'moment'
import { Formik,Form, Field, ErrorMessage } from 'formik';
import AuthenticationService from './AuthenticationService.js'
import TodoDataService from '../../api/todo/TodoDataService.js'

class TopoComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id,
            description: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount(){
        if(this.state.id ===-1){
            return
        }
        let userName = AuthenticationService.getLoggedInUsername()        
        TodoDataService.retrieveTodoForId(userName,this.state.id)        
        .then(            
            response => {                
                this.setState({
                    description : response.data.description,
                    targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
                });               
            }
        )
    }

    onSubmit(values){
        let userName = AuthenticationService.getLoggedInUsername()   
        if(this.state.id===-1){
            TodoDataService.createTodo(userName,{
                id: this.state.id,
                description: values.description,
                targetDate: values.description
            }).then(
                () => this.props.history.push('/todos')
            )
        }else{
            TodoDataService.updateTodoForId(userName,this.state.id, {
                id: this.state.id,
                description: values.description,
                targetDate: values.targetDate
            }).then(
                () => this.props.history.push("/todos")          
            )
        }
    }

    validate(values){
        let errors = {}
        if(!values.description){
            errors.description = 'Enter a Description'
        }else if(values.description.length < 5){
            errors.description = 'Enter atleast 5 chars in description'
        }

        if(!moment(values.targetDate).isValid()){
            errors.targetDate = 'Enter a valid Target Date'
        }
        
        return errors;
    }

    render(){
        let description = this.state.description;
        let targetDate = this.state.targetDate;

        return (
        <div>
            <h1>Todo</h1>
            <div className="container">
                <Formik
                    initialValues={{
                        description: description,
                        targetDate: targetDate
                    }}
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={this.validate}
                    enableReinitialize={true}
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="description" component="div" 
                                            className="alert alert-warning"/>
                                <ErrorMessage name="targetDate" component="div" 
                                            className="alert alert-warning"/>
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field className="form-control" type="text" name="description"/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Target Date</label>
                                    <Field className="form-control" type="date" name="targetDate"/>
                                </fieldset>
                                <button type="submit" className="btn btn-success">Save</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
        )
    }
}

export default TopoComponent