import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder , FormGroup , Validators } from '@angular/forms';
import { CommonService } from 'src/app/Services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  registerForm: FormGroup;
  submitted = false;
  allusers:any = [];
  
    constructor(private formbuilder:FormBuilder,private common:CommonService) {
      
    }

    adduser(formObj){
      this.common.createuser(formObj).subscribe((response)=>{
        this.getallusers();
      })
    }
    getallusers(){
      this.common.getuser().subscribe((response) =>{
        this.allusers = response;
      })
    }

  ngOnInit() {
    this.getallusers();
    this.registerForm = this.formbuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      phone: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      tnc: ['', Validators.required]
  });
}

get fval() {
  return this.registerForm.controls;
  }
  //this.user.fullName='';
  signup(){
  this.submitted = true;
  if (this.registerForm.invalid) {
  return;
  }
  alert('form fields are validated successfully!');
  }

}
