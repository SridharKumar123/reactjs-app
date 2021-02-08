import axios from 'axios';

class HelloWorldService {

    executeHelloWorldService(){
        return axios.get('http://localhost:8080/hello-world');
    }

    
    executeHelloWorldBeanService(){
        return axios.get('http://localhost:8080/hello-world-bean');
    }

    executeHelloWorldPathService(name){
      //  let username = "user"
      //  let password = "password"

      //  let headerValue = 'Basic ' + window.btoa(username + ':' + password);
      return axios.get(`http://localhost:8080/hello-world/path-var/${name}`);
//        return axios.get(`http://localhost:8080/hello-world/path-var/${name}`,
 //       {
  //          headers: {
  //              authorization : headerValue
  //          }
  //      }
  //      );
    }
}

export default new HelloWorldService()