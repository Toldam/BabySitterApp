//import { TempDataService } from './../temp-data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
//import { MatCheckbox } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
//import { Sitter } from '../entities/sitter';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any;


  constructor(private fb: FormBuilder, private router: Router, 
    private authService: AuthService, /*private tmp: TempDataService*/) { }

  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(5)] ],
        password: ['', Validators.required] 
      }
    )
  }

  onSubmit(loginForm) {
    if (loginForm.valid) {
      if(this.loginForm.username = "admin"){
        //IF admin do something
        console.log("Logged in as Admin");
      }

      else{
        //If not, something else
        console.log("not logged in as admin");
      }

      // Send request to back-end to validate login.
      this.authService.login().subscribe(result => {
        // Navigate based on a certain condition.
        
        //denne kører efter console.log("ELSE hej igen"); da der er delay på
        console.log("IF hej");
        this.router.navigate(['/portal/find-a-sitter']);  
      });

      console.log("ELSE hej igen");
      
    } else {
      // Punish user for not filling out fields.
    }

    console.log(loginForm);
  }
  
  https://github.com/Toldam
}