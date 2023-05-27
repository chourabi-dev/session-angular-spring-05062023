import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  createAccountForm = new FormGroup(
    {
      email: new FormControl('',  [Validators.email,Validators.required]  ),
      fullname: new FormControl('',[ Validators.required, Validators.minLength(10) ]),
      password: new FormControl('',Validators.required),
      
    }
  );



  createAccount(){
    console.log("submited...");

    const formData = this.createAccountForm.value;

    console.log(formData);

    console.log(this.createAccountForm);
    
    
    
  }




}
