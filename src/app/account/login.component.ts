import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { request } from 'http';
import { Movie } from '../admin/model/movie';
import { AppService } from '../admin/service/app-services.service';
import { AuthMicroservicesAddress } from '../admin/service/auth-microservice';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [AppService,AuthMicroservicesAddress]
})

export class LoginComponent implements OnInit {
  constructor(private _appService: AppService, private _microservice: AuthMicroservicesAddress,
    private router: Router) {

  }

  private formLogin: FormGroup;
  ngOnInit() {
    this.formLogin = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  save(){
    event.preventDefault();
    if (this.formLogin.valid){
      const LoginModel =
    {
      login : this.formLogin.controls['login'].value,
      password : this.formLogin.controls['password'].value
    }
    this._appService.post(this._microservice.authApi,LoginModel).subscribe(x => {
      if (x.jwtToken !== undefined){
        localStorage.setItem('token',x.jwtToken);
        this.router.navigate(['../movie/movie-list']);
      }
        else{
          alert('Invalid Credentials');
        }
    });
  }
  else{
    alert('Invalid Credentials');
  }
  }

}
