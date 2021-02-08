package com.wishlist.react.app.rest;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.wishlist.react.app.model.Todo;
import com.wishlist.react.app.repo.TodoJpaRepo;
import com.wishlist.react.app.service.TodoHardCodedService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class TodoJpaController {
	
	@Autowired
	private TodoHardCodedService hardCodedTodo;
	
	@Autowired
	private TodoJpaRepo todoJpaRepo;
	
	@GetMapping(path="/jpa/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username){
		return todoJpaRepo.findByUsername(username);		
	}
	@GetMapping("/jpa/users/{username}/todos/{id}")
	public Todo getTodoForId(@PathVariable String username, @PathVariable long id) {
		return todoJpaRepo.findById(id).get();		
	}
	
	@PutMapping("/jpa/users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodoForId(@PathVariable String username,
			@PathVariable long id, @RequestBody Todo todo) {
		todo.setUsername(username);
		Todo updatedTodo = todoJpaRepo.save(todo);
		return new ResponseEntity<Todo>(updatedTodo,HttpStatus.OK);
	}
	
	@PostMapping("/jpa/users/{username}/todos")
	public ResponseEntity<Void> createdTodo(@PathVariable String username, 
			@RequestBody Todo todo) {
		// we need to return the URL of the todo - meaning URL with id, so it can load it
		todo.setUsername(username);
		Todo createdTodo = todoJpaRepo.save(todo);
		// we get the current path and append id to it
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
			.path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
		
	}
	
	@DeleteMapping("/jpa/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id){
		
		todoJpaRepo.deleteById(id);		
		return ResponseEntity.noContent().build();
	}
}
