package com.wishlist.old.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BaiscAuthController {

	@GetMapping("/basicauth")
	public AuthenticationBean authenticate() {
		return new AuthenticationBean("success");
	}
	
}
