import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private api:HttpClient) { }


  getProductList(){
    return this.api.get('http://localhost:8080/api/products/list');
  }


  deleteProductByID(id:any){
    return this.api.delete('http://localhost:8080/api/products/delete/'+id);
  }

  
  addNewProduct(data:any){
    return this.api.post('http://localhost:8080/api/products/add', data );
  }

  
  editProduct(data:any,id:any){
    return this.api.post('http://localhost:8080/api/products/update/'+id, data );
  }

  

}
