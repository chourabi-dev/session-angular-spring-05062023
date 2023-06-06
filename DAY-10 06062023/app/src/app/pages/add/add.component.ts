import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {


  constructor(private api:ApiService, private router:Router){}

  productForm = new FormGroup({
    name: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    quantity: new FormControl('',Validators.required),
    
  })


  saveProduct(){
   
    console.log(this.productForm.value);

    this.api.addNewProduct(this.productForm.value).toPromise().then( ()=>{
      alert('Product added successfully');
      this.router.navigateByUrl('/');
    } ).catch()
    
  }
}
