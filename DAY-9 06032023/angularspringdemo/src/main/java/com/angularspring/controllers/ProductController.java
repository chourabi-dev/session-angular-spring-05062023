package com.angularspring.controllers;


import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.angularspring.entites.Product;
import com.angularspring.repositories.*;
import com.angularspring.request.ProductModel;
import com.angularspring.response.JsonResponse;

@RestController
@RequestMapping("/api/products")
public class ProductController {

	
	
	
	@Autowired
	private ProduitRepository ProduitRepository;
	
	
	
	@GetMapping("/list")
	public ResponseEntity<?> getListProducts(){
		return  ResponseEntity.ok(    this.ProduitRepository.findAll()    );
	}
	
	
	
	@PostMapping("/add")
	public ResponseEntity<?> add( @RequestBody ProductModel model ){
		
		// 1 create the entity !!!
		Product product = new Product();
		
		// 2 fill the data !!
		
		product.setName( model.getName() );
		product.setPrice( model.getPrice() );
		product.setQuantity( model.getQuantity() );
		
		
		// 3 save the entity in the DB
		this.ProduitRepository.save(product); // test => id == null ? new //// id != null update
		
		
		JsonResponse res = new JsonResponse();
		
		res.setSuccess(true);
		res.setMessage("Product inserted successfullly.");
		
		return  ResponseEntity.ok(    res    );
	}
	
	
	
	
	
	// path variable !!!
	
	@PostMapping("/update/{id}")
	public ResponseEntity<?> updateProduct( @RequestBody ProductModel model, @PathVariable long id ){
		
		
		
		
		
		try {
			// find the entity by id
			Product product = this.ProduitRepository.findById(id).get();
			
			// 2 fill the data !!
			
			product.setName( model.getName() );
			product.setPrice( model.getPrice() );
			product.setQuantity( model.getQuantity() );
			
			
			// 3 save the entity in the DB
			this.ProduitRepository.save(product); 
			
			
			JsonResponse res = new JsonResponse();
			
			res.setSuccess(true);
			res.setMessage("Product updated successfullly.");
			
			return  ResponseEntity.ok(    res    );  // status 200
			
		}catch(NoSuchElementException e) {
			
			JsonResponse res = new JsonResponse();
			
			res.setSuccess(false);
			res.setMessage("Product not found");
			
			return  ResponseEntity.status(404).body(    res    );
		}
	}
	
	
	
	
	
	
	
	

	// path variable !!!
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteProduct(  @PathVariable long id ){
		
		
		
		
		
		try {
			// find the entity by id
			Product product = this.ProduitRepository.findById(id).get();
		 
			
			
			// delete the entity in the DB
			this.ProduitRepository.delete(product); 
			
			
			JsonResponse res = new JsonResponse();
			
			res.setSuccess(true);
			res.setMessage("Product deleted successfullly.");
			
			return  ResponseEntity.ok(    res    );  // status 200
			
		}catch(NoSuchElementException e) {
			
			JsonResponse res = new JsonResponse();
			
			res.setSuccess(false);
			res.setMessage("Product not found");
			
			return  ResponseEntity.status(404).body(    res    );
		}
	}
	
	
	
	
	
	
	
	
	
	
}
