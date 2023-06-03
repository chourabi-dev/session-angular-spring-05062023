package com.angularspring.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.angularspring.request.ConnectModel;
import com.angularspring.response.UserModel;

// annotation
// exeucte background tasks !!!!




@RestController()
@RequestMapping("/app")
public class AppController {
	
	
	
	
	// GET
	// http://localhost:8080/employee?year=2015
	
	@GetMapping("/hello")
	String helloworld() {
		return "hello world";
	}
	
	
	@GetMapping("/demo")
	ResponseEntity<?> demo() {
		
		// type ResponseEntity => Response from serevr => 200 , 404 , 500
		
		UserModel user = new UserModel();
		
		user.setEmail("tchourbai@gmail.com");
		user.setUsername("demo");
		
		return ResponseEntity.status(200).body( user );
		
	}
	
	
	
	@GetMapping("/somme")
	ResponseEntity<?> somme( int x, int y ) {
		
		 
		return ResponseEntity.status(200).body(  x + y  );
		
	}
	
	
	
	
	
	
	//POST
	
	@PostMapping("/login")
	ResponseEntity<?> login(   @RequestBody ConnectModel model    ) {
		
		// username ?
		// password ?
		
		
		
		 
		return ResponseEntity.status(200).body(  model.getUsername()   );
		
	}
	
	
	

}
