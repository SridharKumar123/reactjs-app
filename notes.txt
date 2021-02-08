node js

install node js:
commands to check version
node -v
npm -v

node package manager - npm - package manager for js
  - this is like maven, gradle for java projects
  - maven allows to define dependencies in pom files and download them
  - npm does similar as maven for js 
  
npm init  - to create project
 = provide project name and other details
- a file names package.json will be created
now we can add dependency entries into this file and issue "npm install" command(like maven update) - it will download dependencies into node_modules folder.
or we can use npm commands like below to download dependencies and it will internally add entry into the package.json for further reference.

npm install jquery
 - downloads the jquery dependencies under node_modules folder in current location
 - adds entry into the package.json for jquery dependency
 
npx create-react-app  my-app
  - creates a simple react app by running this command
cd my-app
npm start
  - to start the server
npm run build
  - compress js files for prod
  
locahost:3000 - loads defautl react js page
index.html inside the public folder is the page which loads this screen.
it has title element - lets change it and see
we can make change in App function in App.js inside the src folder. this will be reflected.
  if we had used class, then we need to change in render method.
  
package.json
dependencies : downloaded into node_modules folder
react - this is core of react fw
react-dom - this is for web app. for android apps we use react-native.
react-scripts - gives features like start/stop server

public folder
 - index.html - this is loaded on page load
			  - defines div with id of "root"
src folder
 - react code 
 - App.js, App.css, App.test.js - code for app component
 - index.css - styling for the entire react application
 - index.js - the root dom element from index.html is fetched here and App component is rendered here using ReactDom.render()
 
Component - allows to split screen into smaller modules
   App component - first component loaded into root element
   
Items inside a component:
view - jsx or js 
   jsx - extension of html 
logic - js
styling - css
state - internal data store
props - pass data

Class Component:
 - create a class component by extending "Component" from react and implement its render method
 - include the component as part of root component

Function Component:
 - function componentName - return the items which we had within render method earlier.
 - simpler than class component - just define function and return jsx
 
jsx 
 - in js file we are writing html and calling it jsx	
 1) we can have only one parent element. if we want to have multiple elements, create a parent div and wrap elements within it.
 - we cannot return 2 or more diff separate elements. do like below.
 <div>
    <h1></h1>
	<h1></h1>
  </div>
 2) all nodes must be closed
   <a><b></a></b>
 3) in class component, add () around return values. if not, the first line must start in same line of return keyword.
 4) Custom components must have first letter in Capitals
 5) when using jsx, its mandatory to import "React" in the component, even if we dont use it.
BABEL 
  - this converts jsx into js code. js finally runs on browsers.
  - real purpose of babel 
      - diff browsers have diff support for js features. so its difficult to write code which works on all browsers. 
	  - so we write js code using latest js standard and babel compiles/converts it to lower versions of js

in js, each js file is a module. 
create new folder -
   - create a new jsx file
   - import React, {Component} from react.
   - every module can have one default export and multiple other export components
   - for default export we can do directly. for all other exports we need to put within {}
   - in the App.js, import this file and use it.
   
have all components in separate jsx files.

on click of a button we need to increment another variable. we need to maintain state.
for button have an onClick even and provide the js function to call. any js within jsx should be in {increment()}
Once we do this, But we can notice that -- increment is getting called when page is loading and not when we click the button.
 - this is because we called it like increment() - here we are invoking method, in jsx we just need to pass reference of method
 so call it like {increment} - works fine.
 
we need to maintain state of this component to update on click of button. 
 - 1) convert the function component into a class component by extending Component and add render method
   2) move the increment method inside class and remove function keyword from it
   3) the call to increment must be this.increment
   4) adding state - 
       - define initial state in constructor - the state will hold a js object.
	   - first line of constructor is to call super()
	   - on the increment method update the js object in the state
	   - while using the js object key, use within {}
   5) incrementing state
       - once we call super() in constructor, "this" keyword will be availble for constructor and render method
       - "this" keyword will not be availble by default in all the other methods in class.
	      - we need to bind the method to the class inside the constructor  - bind(this)
		  - after that we can use "this" in that method
		  - OR we can use an arrow function to avoid creting bind
	   - we must not update state directly. call the setState method and update the field within state obj which we are interested.

Note that we did not directly update state counter variable but we called setState to update the value of counter.
 why ? 
 js has internal representation of a html page called DOM - document object model
 DOM is complex and updating DOM is a slow process.
 React brings in virtual dom. - this is reacts representation of DOM in memory. as its in memory, making changes is easy.
 if we have 2 versions of state, it creates virtual dom with these 2 versions. finds the diff between them and uses that to update DOM. so instead of making multiple updates to DOM, it finds the final state and updates only the modified items.
 
arrow function
  - similar to lambda expression
 var list = [1,2,3,4]
 list.forEach(x=> console.log(2%x))
this arrow function is useful , as if we create a method using arrow function then we dont need to bind it to use "this" keyword inside it. "this" will be auto availble.

var vs let
let- block scope
var - if we have multiple inner blocks and declare a var in inner most block, it will be availble in outer blocks as well.

if we want 3 counter blocks(button and value), copy the counter components line 3 times in the app.js
now we have 3 counter blocks, we want to achieve below,
1) define diff increment values for each button
    - use props to make sure each counter uses a diff increment value
	- pass in any key/value in the app.js - component declaration line and this can be accessible in the component using props
	- the prop must be passed as jsx {} expression. else it will be considered as stringif its passed in ""
2) on click of button, we want a single common value and any button must update only this.


default value for props 
  - ClassName.defaultProps = { by : 1}
type check on props - this does type check and throws warning if type was wrongly passed
  - ClassName.propTypes = { by : PropTypes.number}
  
Moving state up:
  - move state from child to parent.
  
right now, the state is present within each of the counter classes.
if we need a common value, we need to maintain a common state.

 refactoring:
 instead of having state inside App component, we create a counter component and have multiple counterButton components inside it. Use the counter component inside the App.js
 we need to move state from CounterButton to counter.

pass the parent class method reference to child class as props.
now child  can call the parent class method using this.props.methodName()
child can pass values inside this method.
if child calls it, then parent method will be invoked and it gets the value which child has passed and it can use it.

previousState 
- if we use arrow function inside the setState method, we can get the previous state keyword.
untill now we got this.state and updated it. instead we can get values from previous state.

arrow function - in evenLIstener(onClick) - if we need to call super class method with args
if we want to call the super class method fro child and within jsx. we can call it directly if we dont have any input arg
if the method expects an input arg, we cannot call directly - we need to use arrow function
() = >  the arrow function tells that we are defining a method and call it onClick

Login form
 - we need to maintain the react state for the Login Component - username and password
 - when user enters data - handle "onChange" - provide custom method and in it save it in state
 Controller component  - entire change in the UI is controlled by state of react
		 - when we make change in UI, (enter username) - event is triggered and state is upated, which in turn updates UI 
		 
generic onChange - use event.target.name to set the values
[] - use it to declare variables.    [event.target.name] : event.target.value

Login - separate function component
 - cretae a new function component which returns the div(success/failure message) based on property passed to it
 - inside function, check if its true and then return login success
 - function must accept props and we must pass the req props to it
 - the passed props will have been a value from state, which we already validated and populated based on user login creds

Conditional rendering
 - for a simple if logic, we created a new function component above and used it.
 - this can be simplified much.
 - true && "print this"
 - false && "returns false"
 - use the true/false expression in front and display
  {this.state.hasLoginFailed && <div>Invalid Creds</div>}
  
Routing - React Router
 - helps us to route from one component to another component
 - based on the URL we will be able to navigate to a page
 - on click of button, we can navigate to diff page
- we need to add react router library to our app.
  = npm add react-router-dom
  - entry will be auto added into the project.json file
 This allows us to specify path and corresponding component for the path.
 
Login to Welcome component routing
- when we click the login button, loginCLicked method is invoked. now in this method we can perform the cred check and redirect
- perform validation from db and if success, 
- we just need to set the welcome path in - this in props.history
   this.props.history.push("/welcome");
   - we can even pass state obj to the above
Error Component
- use it without any path
- to ensure only one is rendered at a time, use the Switch

Route Param for Welcome component via Router
 - pass as a path param - in the URL - configure route def like below 
 <Route path="/welcome/:name" component={WelcomeComponent}/>
 - use tick ` symbol while passing in URL
 this.props.history.push(`/welcome/${this.state.username}`);
 - this path param will be part of the props of the component which fetches it. we can use it from props.
 return <div>Welcome {this.props.match.params.name}</div>
 
 forEach, map functions
 - forEach - gives us each element one by one and we can play with it
 - map - similar to above. But here we can map every obj to some other obj and returns a list of those mapped values
 this.state.todos.map( todo => todo.id);
 
Link - link to another page
- when we use < a href tag- the entire page will be refreshed while moving to the next page
- but if we use Link tag, only that specific component will be replaced by the new component. 

Now we connect login --> welcome with link to todo  -> todo page


Bootstrap:
we need to apply css to style pages. Bootstrap is the popular UI Framework to style UI pages
- looks right in both web and mobile
we can include Bootstrap directly into the files, shortcut
bootstrap 4 unpkg  - search for this in google. unpkg is a CDN
https://unpkg.com/browse/bootstrap@4.1.0/dist/css/bootstrap.min.css
import this into the project

- under src - create a new files named bootstrap.css and import above line
@import url(https://unpkg.com/bootstrap@4.1.0/dist/css/bootstrap.min.css)

- import this bootstrap.css file in app.js

Bootstrap to create menu with navigattion link:
we will use bootstrap classes like navbar, navbar-nav, nav-link

User bootstrap and html5, header and footer and add more styling.

Security - Authentication
- currently we can go to to-do, welcome - any page without logging in
- how can we prevent that. only a logged in user can visit pages inside the website

 how do we track if a user is logged in  - use session storage of browser.
 - data inside session storage is availble to the app while the user logged in into the current browser session

Browser -> inspect -> Application tab -> storage section -> Session storage -> it can hold key/values
when a user logs in, we can set a key/value for that user session into the session storage.
when user logsout, we can remove the key/value.
if browser is closed, then the session storage is auto removed.

Lets put an entry into session storage when user has logged in.
 - before we render other pages, check if this key is filled.
 
For react component we export the class directly. For helper services, we export an instance of the class - an object.
We create a new AuthenticationService.js file. Create an instance of it - export default new AuthenticationService()
 now if we import this, we get an object and not class
Sessionstorage property allows you to access as session Storage object for the current origin 

create and store using login and delete during logout.

Why not LocalStorage ? why did we use session storage ?

Data stored in local storage has no expiration time. we need to explicitly delete it. even if user closes browser and comes back it will be there.
Data stored in session storage gets cleared when page session ends. meaning when browser is closed and reopens.

Enable/Disable menu items:
 - if user has logged in enable links, if logged out disable them
To ensure that header menus are updated whenever the router is called we need to wrap HeaderComponent with a call to withRouter.

Nowe we have enabled/disabled menus. But still user can enter the url directly in toolbar and access the page.
this must as well be blocked.
we need to authenticate before we route. 
instead of Route, create and use custom AuthenticatedRoute - here we see if user is logged in- only then we allow - esle direct to login - we write this custom logic
in this check if user has logged in, if so direct to the page, else redirect to login page.
 - use spread operator to pass all properties of the Route 
 - spread - if we have a array of 3 elements and we use ...arrayName, then all elements of array will be passed as individual params to the function.
 let values = [1,2,3]
 function sum(a,b,c) {return a+b+c}
 we can call as - sum(values[0],values[1],values[2])    
 or
 use spread operator - sum(...values)   - both are same.

WebService ?
  inter-operable(not platform dependent) machine to machine(or app to app) interaction over a network.
  
how does data exchange between apps take place ?
  request/response should be platform independent - xml, json
  service definition
    - req/resp format
	- req structure 
	- resp structure
	- endpoint - URL to call
	
REST - Representational State Transfer
  - data exchange format - json is popular
  - transport format - only HTTP
  - service definition - swagger, WADL
  
spring boot
 - web, devtools, JPA, H2

 What is dispatcher servlet ?
 Who is configuring dispatcher servlet ?
 What does dispatcher servlet do ?
 how does object get converted to json?
 who configure error mapping
 
 Spring Boot Auto Configuration
 Spring boot looks at all jars/classes in its class path and auto configures the ones which are req. if we have included web dependency, then it sees dispatcherservlet in classpath and configures it.
 HttpMessageconverter & jacksonToObjectMapper - obj to json
 
 dispatcher servlet handles all req /.
 Front controller pattern - any req goes to the dispatcherservlet first. 
 dispatcherservlet knows all the mappings which are present in app. 
 
Create a simple REST API which returns a welcome message using Spring Boot
Call the REST API from the react application welcome page

axios promise http client
- allows to do http calls based on promises

usually in UI, the req/resp are async. if we wait for a response after a req, entire browser would hang. 
we send a req and continue for the other activities and once we get response we update the screen based on it. async
so all http calls in FE should be done using a async FW. 

Promise helps us to do simple aync calls. once a response is completed, we get a callback and based on it we can perform activities based on its response.

- add axios to the project
npm add axios

axios.get('http://localhost:8080/hello-world');

the function which calls the axios, gets a promise back, using which it can handle on complete behavior.
HelloWorldService.executeHelloWorldService()
        .then(response => console.log(response))
		.catch(error => console.log(error))

now we are running the react FE app on port 4200 in localhost
The spring boot BE is running on port 8080 in locahost
using axios we are trying to call the BE server from FE server, BE spring boot blocks this. 
we get below error, CORS
Access to XMLHttpRequest at 'http://localhost:8080/hello-world' from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
 - we need to specify to spring boot that it must allow req from locahost:4800
		@CrossOrigin(origins="http://localhost:4200/")

Lets change the default port of nodejs app - modify below in package.json
"start": "SET PORT=4200 && react-scripts start",


Get all todos
GET /users/{user_name}/todos

Delete a todo
DELETE /users/{user_name}/todos/{todo_id}

Edit a todo
PUT /users/{user_name}/todos/{todo_id}

Create a todo
POST /users/{user_name}/todos/


In react life cycle, 
1) whenever a component is initialized, the constructor will be first called.
2) when a state in component changes and view needs to be updated, render will be called
3) when component is loaded for first time and shown on browser, (aka mounting), the componentDidMount() method will be called.
   - we can make the object empty in constructor and initialize them in componentDidMount
   - why ? if we put in constructor, the state will not be initialized untill the REST api to fill it is running
   - wheras, we can declare and initialize it to default value in constructor 
       - initial render will be called with default values
   - and load in componentDidMount
       - render is called as soon as we get response back using componentDidMount
4) below order will be the call to diff methods,
		- constructor
		- render
		- componentDidMount - lets say we update state here, once state is updated, below render is called
		- render
5) ComponentWillUnmount()
   - called just before a component is unmounted/removed from view
6) shouldComponentUpdate(nextProps, nextState)
   - this method returns a true or false
   - if we return true, then render is called
   - if we return false, render will not be called
     impoves performance, should the render be called for every change of state ? we can decide that logic here.
	 
	 
REST
ResponseEntity 
 - allows to return no content but status
 - if req we can return both content and status
 
to access the API via postman, 
Origin http://localhost:4200
set this in header, because we have configured cors to allow only from 4200

form with moment(format dates), formik(form library) and bootstrap 

formik - within this define a method which would return the entire form

 <Formik>
   {
     (props) => (
          <Form></Form>
		)
   }
 </Formik>
				
     inside the formik tag, we are defining a method which accepts props as input, and returns a html form
	 in the html form we can use bootstrap fields to add more style instead of basic html tags.
	 formik provides an onSubmit method, which takes values as arg. onSubmit, the values contains all the values entered in the fields in json format. very simple. we dont need any on change or any other function to handle each tag.
	validate - we can use this method to validate user input
    on click of submit , first validate is called, then the submit is called.	
	
javascript shortcut

  let description = this.state.description;
  let targetDate = this.state.targetDate;
	
can also be written as 
  let {description,targetDate} = this.state
       
Securing Application:

When we issue any req URL in the postman client, we are not providing any username/password. but it works fine.
this should be blocked. this is unsecure application.
anyone who knows URL can access our app data without authentication.

along with every req, we must send some authentication data(like username/password). Basic Security.
but this is not very safe, so we can use JWT token. more secure.

Setting Spring Security:
 - add spring boot starter security dependency in pom
 FormBasedAuthentication
 - just by adding this line, spring enables security. now if we try accessing the URI, spring redirects to a login page.
 - login pages are made of form. so this type of authentication is called form based authentication.
      - default username: user and default password: will be printed in spring logs
	  - now if we enter this, we can access the URI and returns response
	  - a session is created in server and a cookie is created in browser, so conseq req works fine without authentication
  BasicAuthentication
   - in above scenario, if we pass Basic Authorization header - with encoded form of Username/password, for every req, then works fine.
   - in postman client, we can choose basic auth, then enter username/password, then it auto generates encoded data
   - we can pass this data for every future req
   - no session is req in this approach
   - configure a custom username/password - in application.properties
    - configure username/password
	Authorization : Basic dXNlcjpwYXNzd29yZA==
	
now that we have configured spring security by adding entry in pom and in app.properties, the axios REST calls will not work wihtout adding headers for basic authentication.
we will get network error. blocked by CORS policy.
get the username and password and we need to construct the header from it. 
the string needs a below, username and password must be encoded - in js use - window.btoa() - this does base64 encoding
  
  "Basic" + userNameEncoded + ":" + passwordEncoded 
  
   let headerValue = 'Basic ' + window.btoa(username + ':' + password);
  call is as below,
   return axios.get(`http://localhost:8080/hello-world/path-var/${name}`,
        {
            headers: {
                authorization : headerValue
            }
        }
        );
Now we get an error saying OPTIONS req is sent before the GET req is sent. 
the issue is, before sending GET or POST or any req, an OPTIONS req is sent to check if we have right permission.
The option req is denied permission.

CSRF - cross site request forgery

WebSecurityConfigurerAdapter  - contains default security config for spring security
 - we are interested in "configure(HTtpSecurity)" method.
we need to entend this file in our app and override the configure method to fix the authentication.

@Configuration - this file has config info
@EnableWebSecurity - this has info related to spring security

// here we disable csrf - which forces to have csrf token as part of post and put req. we will use JWT instead.
// allow preflight req to all URL without authentication- OPTIONS req is preflight req
// use httpBasic auth

@Configuration
@EnableWebSecurity
public class WebSecurityConfigurerBaicAuth extends WebSecurityConfigurerAdapter{
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
		.csrf().disable()
		.authorizeRequests()
		.antMatchers(HttpMethod.OPTIONS,"/**").permitAll()
		.anyRequest().authenticated()
		.and()
		//.formLogin().and()
		.httpBasic();		
	}
}

it works now.
But we need to add the authorization header for all the new axios method calls, a better approach is to use a interceptor.
we want to intercept every req and add an authentication header to it. we can easily intercept req/resppose in axios
do this only when user is logged in. add that check.
create a method to do all this and invoke the method after successful login.

Once during login using username and password we create the authorizeHeader. for all the HTTP req, we use the interceptor to  add this authorizeHeader into those req. One time config.

The login component was performing the authentication in UI. we need to move it to BE via basic authentication.
now we create a dumy REST api, and we get the uer entered username and password and pass as header to call this method.
if it matches with the creds configured in the props file, then REST API is success. this acts as a login validation.


JWT JSON Web Token

All this time we used Basic Authentication 
 - no expiration time 
 - no user details like authorization details
 
common token standard - JWT
  - standard portion
  - user details and authorization details
each jwt token contains
  1) header
		- algo used for hashing
		- type - jwt
  2) payload
		- authorization data
		- name, time created etc
  3) signature
		- base64 encoded header, payload
		- 512bit secret   - only person who knows this secret string can decode the JWT token

Usage:
When user logs in using username/password, we send a req to server and server will send us a JWT token back. 		
We use this JWT token in all the subsequent request. 
There will be an expiration time, if we get near the expiration time, we need to ask for a refresh of the token.

Now as part of authentication, we send username/password and we hit the authenticate URL. this will send us back the JWT token generated by server. we can use this token in all subsequent req.

jwt token 
{"token":"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTYxMTM5Mzc0OCwiaWF0IjoxNjEwNzg4OTQ4fQ.7Gv87l4IKevm3NT1oeManF61EiAFgApYXU0gUbtKg4RuOTR85wrdkHodJE1f22KP9jA2AStUcpjQIQd-YxklEQ"}

As part of next req, send the token as part of header,

Authorization  : Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTYxMTM5Mzc0OCwiaWF0IjoxNjEwNzg4OTQ4fQ.7Gv87l4IKevm3NT1oeManF61EiAFgApYXU0gUbtKg4RuOTR85wrdkHodJE1f22KP9jA2AStUcpjQIQd-YxklEQ

we add a filter to make sure every req passes via it and authentication is done there. 
If the user us authorized, we put his details into SecurityContextHolder.getContext()
   - all other servlets, components can access the user details from here.
   
Lets say, user details are stored in LDAP or DB or inmemory, spring security does not worry.
 - it provides an interface - UserDetailsService, implement it and provide the user details - loadUserByUserName(),  spring security takes care of authentication
 
Integrating h2 db using jpa.
we have already added dependencies for h2. so once we mark any pojo class as @entity, spring will take care of automatically
creating a table in db for it.
we can view the h2 db using - http://localhost:8080/h2-console
db url - jdbc:h2:mem:testdb

to add initial entries into the todo table, create a data.sql file under resources folder, and add insert statements to it.
spring takes care of running these insert statements and populates them in DB.

insert into todo(id,username,description,target_date,is_done)
values(10001, 'user','Learn JPA',sysdate(),false);


JPA

super class to sub class mapping:
@Entity
@Inheritance(strategy=InheritanceType.SingleTable)
@DiscriminatorCOlumn(name="column_name")

it creates just a single table,with providec cilumn as diffrentiator .

@ManyToMany(mappedBy="")

