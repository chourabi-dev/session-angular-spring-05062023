import { Component , OnInit} from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id:any
  
  constructor(private api:ApiService, private router:Router, private route:ActivatedRoute){}




  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.id = id;

    console.log(id);

    // fill the form !!!!!
    this.api.getProductList().toPromise().then((res:any)=>{
      res.map((p:any)=>{
        if (p.id = id) {
          this.productForm.setValue({
            name: p.name,
            price: p.price,
            quantity: p.quantity
          })
        }
      })
       
    })
 

  }

  productForm = new FormGroup({
    name: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    quantity: new FormControl('',Validators.required),
    
  })


  saveProduct(){
    
    console.log(this.productForm.value);

    this.api.editProduct(this.productForm.value, this.id).toPromise().then( ()=>{
      alert('Product updated successfully');
      this.router.navigateByUrl('/');
    } ).catch()
    
  }
}
