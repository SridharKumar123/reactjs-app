package com.wishlist.react.app.rest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.wishlist.react.app.model.HelloWorldBean;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class WelcomeController {

	@GetMapping(path="/hello-world")
	public String getWelcomeString() {
		return "Hello Buddy Welcome !";
	}
	
	@GetMapping(path="/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello World Bean");
	}
	
	@GetMapping(path="/hello-world/path-var/{name}")
	public HelloWorldBean helloWorldPathVar(@PathVariable String name) {
		//throw new RuntimeException("Something went wrong. Please contact the Admin");
		return new HelloWorldBean(String.format("Hello World , %s " , name));
	}
	
	
}
