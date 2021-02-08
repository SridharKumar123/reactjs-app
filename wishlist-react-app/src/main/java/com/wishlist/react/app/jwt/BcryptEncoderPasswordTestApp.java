package com.wishlist.react.app.jwt;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptEncoderPasswordTestApp {

	public static void main(String args[]) {
		BCryptPasswordEncoder encod = new BCryptPasswordEncoder();
		String encodedString = encod.encode("password");
		System.out.println(encodedString);
	}
}
