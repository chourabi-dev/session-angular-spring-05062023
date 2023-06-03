import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit  {

  users:any[] = [];
  isLoading:boolean = false;


  constructor( private api:ApiService ){}


  ngOnInit(): void {
    this.getData();
  }




  getData(){
    this.isLoading = true;

    this.api.getUsersList().toPromise().then(    
      
      (data:any )=>{
      
        console.log( data  );

       this.users = data;
        

      
    }).catch(    
      (err)=>{ console.log(err);
     }).finally(()=>{
      
      this.isLoading = false;
       
     })
  }
}
