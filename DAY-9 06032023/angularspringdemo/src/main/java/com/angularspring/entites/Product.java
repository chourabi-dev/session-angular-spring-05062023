package com.angularspring.entites;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table( name="products" )
public class Product {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO) 
	private long id;
	
	
	@Column( name="product_name", nullable=false )
	private String name;
	
	@Column( name="product_price", nullable=false )
	private float price;
	
	@Column( name="product_quantity", nullable=false )
	private int quantity;  // private int quantity = 0; default value

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public Product() {
		super();
	}
	
	
	
	
	
	
	

}
