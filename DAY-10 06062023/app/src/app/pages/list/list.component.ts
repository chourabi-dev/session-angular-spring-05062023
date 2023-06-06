import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products:any[] = [];
  

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.getList();
  }


  getList(){
    this.api.getProductList().toPromise().then(
      (data:any)=>{
        console.log(data);

        this.products = data;
        
      }
    ).catch(
      (err)=>{
        console.log(err);
        
      }
    )
  }



  deleteProduct(id:any){
    this.api.deleteProductByID(id).toPromise().then((res:any)=>{
      if (res.success == true) {
        this.getList();
      } else {
        alert(res.message);
      }
    })
  }

  


}
