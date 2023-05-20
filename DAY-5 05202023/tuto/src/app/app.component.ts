import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*title:string | undefined;
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
    { id:1, name:"chourabi taher", phone:93863732, newUser:false },
    { id:2, name:"chourabi taher", phone:93863732, newUser:true },
    { id:3, name:"chourabi taher", phone:93863732, newUser:true },
    
  ] 
  showBloc:boolean = false;*/


  //**************************************** attributes ******************************* */
  /*
  index:number= 0;
  imageSourceURL:string="https://th.bing.com/th/id/OIP.wppOewJXwbl_5hbT7Rr16AHaFB?pid=ImgDet&rs=1";
  gallery:string[] = [
    'https://th.bing.com/th/id/OIP.wppOewJXwbl_5hbT7Rr16AHaFB?pid=ImgDet&rs=1',
    'https://th.bing.com/th/id/R.a1b5ab58afd9cafa336371640a0974b3?rik=YYtdKP%2b6gmNl4g&riu=http%3a%2f%2f2.bp.blogspot.com%2f-AcBBEoKJgjY%2fUWvQRuA4cpI%2fAAAAAAAAFNk%2fsmeprHSRW68%2fs1600%2fhd-wallpaper-with-clouds-reflecting-in-water-of-lake-and-fog.jpg&ehk=jKTnRK6UqDFbB%2fw1bMcLlgwlbwqBct8BgOC5zjClDGY%3d&risl=&pid=ImgRaw&r=0',
    'https://th.bing.com/th/id/OIP.E5Wv2yqUE7OjpwtSxOrxggHaEK?pid=ImgDet&rs=1'
  ]



  next(){
    console.log("clicked...");
    this.index++;

    if (this.index >= this.gallery.length) {
      this.index = 0;
    }

    this.imageSourceURL =  this.gallery[this.index];
  }


  previous(){
    console.log("clicked...");
    this.index--;
    if(this.index < 0){
      this.index = this.gallery.length - 1;
    }

    this.imageSourceURL =  this.gallery[this.index];

  }*/







  articles:any[]=[
    { id:1 , title:"Angular spring", content:"lorem lorem lorem lorem lorem " , likes:20 },
    { id:2 , title:"React spring", content:"lorem lorem lorem lorem lorem " , likes:18 },
    { id:3 , title:"Vue spring", content:"lorem lorem lorem lorem lorem " , likes:135 },
    
  ]


}
