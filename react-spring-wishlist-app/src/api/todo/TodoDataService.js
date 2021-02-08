import axios from 'axios';
import {API_URL,JPA_API_URL} from '../../Constants.js'

class TodoDataService {

    retrieveAllTodos(name){
        return axios.get(`${JPA_API_URL}/users/${name}/todos`)
    }

    retrieveTodoForId(name,id){
        return axios.get(`${JPA_API_URL}/users/${name}/todos/${id}`)
    }

    updateTodoForId(name,id,todo){
        return axios.put(`${JPA_API_URL}/users/${name}/todos/${id}`, todo)
    }

    createTodo(name,todo){
        return axios.post(`${JPA_API_URL}/users/${name}/todos/`, todo)
    }

    deleteTodo(name,id){
        return axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`)
    }
    
}

export default new TodoDataService()