package com.wishlist.react.app.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.wishlist.react.app.model.Todo;

@Service
public class TodoHardCodedService {

	private static List<Todo> todos = new ArrayList<>();
	private static long idCounter = 0; 
	
	static {
		todos.add(new Todo(++idCounter,"root","Learn to play",new Date(),false));
		todos.add(new Todo(++idCounter,"root","Learn react",new Date(),false));
		todos.add(new Todo(++idCounter,"root","Learn microservices",new Date(),false));
	}
	
	public List<Todo> findAll(){
		return todos;
	}
	
	public Todo save(Todo todo) {
		if(todo.getId()==-1) {
			// insert
			todo.setId(++idCounter);
			todos.add(todo);
		}else {
			// update
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}
	
	public Todo deleteById(long id) {
		Todo todo = findById(id);
		if(todo ==null) return null;
		if(todos.remove(todo)) {
			return todo;
		}
		return null;
	}
	
	public Todo findById(long id) {
		for(Todo todo : todos) {
			if(todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}
}
