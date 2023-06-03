import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent  implements  OnInit {

  id:any;


  constructor(private route:ActivatedRoute){}
  
  
  ngOnInit(): void {
    this.id = console.log(this.route.snapshot.params['id']);


    // call server details user id
    
  }

  
}
