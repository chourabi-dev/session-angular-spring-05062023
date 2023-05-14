import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string | undefined;
  email?:string; 
  // string boolean array number obj class


  counter:number = 16500;
  username:string="chourabi";
  employee:any = { username:"chourabi", dep:"DEP-INFO", email:"tchourabi@gmail.com" }   // JSON => key:value
  
  employees:string[] = [
    'employee 1',
    'employee 2',
    'employee 3',
    'employee 4'
  ]


  users:any[] = [
    { id:1, name:"chourabi taher", phone:93863732 },
    { id:2, name:"chourabi taher", phone:93863732 },
    { id:3, name:"chourabi taher", phone:93863732 },
    { id:4, name:"chourabi taher", phone:93863732 },
    { id:5, name:"chourabi taher", phone:93863732 },
  ]




  showBloc:boolean = false;


  
  


}
