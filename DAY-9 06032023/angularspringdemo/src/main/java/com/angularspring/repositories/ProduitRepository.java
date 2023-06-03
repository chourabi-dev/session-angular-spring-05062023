package com.angularspring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.angularspring.entites.Product;

public interface ProduitRepository extends JpaRepository<Product,Long> {

}
