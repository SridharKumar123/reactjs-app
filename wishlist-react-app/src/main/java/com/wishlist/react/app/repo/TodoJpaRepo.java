package com.wishlist.react.app.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wishlist.react.app.model.Todo;

@Repository
public interface TodoJpaRepo extends JpaRepository<Todo, Long>{
	
	List<Todo> findByUsername(String username);

}
