import axios from 'axios'
import {API_URL} from '../../Constants.js';

export const USER_NAME_SESSION_ATTR_NAME = 'authenticatedUser'
class AuthenticationService {

    executeBasicAuthService(username,password){
        let headerValue = this.createBasicAuthToken(username,password)
        return axios.get(`${API_URL}/basicauth`,
            {
                headers:{
                    authorization : headerValue
                }
            }
        )
    }

    executeJwtAuthService(username,password){       
        return axios.post(`${API_URL}/authenticate`,
            {
                username, password
            }
        )
    }

    createBasicAuthToken(username,password){
        return 'Basic ' + window.btoa(username + ':' + password);
    }

    registerSuccessfulLogin(username,password){
        console.log("register called");
        let headerValue = 'Basic ' + window.btoa(username + ':' + password);
        sessionStorage.setItem(USER_NAME_SESSION_ATTR_NAME,username);
        this.setupAxiosInterceptors(headerValue)
    }

    registerSuccessfulLoginForJWT(username, token){
        sessionStorage.setItem(USER_NAME_SESSION_ATTR_NAME,username);
        this.setupAxiosInterceptors(this.createJWTToken(token));
    }

    createJWTToken(token){
        return 'Bearer ' + token;        
    }

    logout(){
        sessionStorage.removeItem(USER_NAME_SESSION_ATTR_NAME);
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTR_NAME);
        if(user===null){
            return false;
        }
        return true;
    }

    getLoggedInUsername(){
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTR_NAME);
        if(user===null){
            return '';
        }
        return user;
    }

    setupAxiosInterceptors(token){
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()){
                    config.headers.authorization = token 
                }
                return config;                
            }
        )
    }
}

export default new AuthenticationService()