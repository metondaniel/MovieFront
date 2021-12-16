import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { AuthMicroservicesAddress } from 'app/admin/service/auth-microservice';
import { Movie } from '../../admin/model/movie';
import { AppService } from '../../admin/service/app-services.service';
import { MovieMicroservicesAddress } from '../../admin/service/movie-microservice';


@Component({
  selector: 'app-resgister-movie',
  templateUrl: './movie-register.component.html',
  styleUrls: ['./movie-register.component.css'],
  providers: [AppService,MovieMicroservicesAddress]
})
export class MovieRegisterComponent implements OnInit {

  constructor(private _appService: AppService, private _microservice: MovieMicroservicesAddress,
    private router: Router) {

    window['redirectLogin'] = function redirectLogin(hello: string) {
      router.navigate(['login']);
    }
  }

  private formCreate: FormGroup;
  ngOnInit() {
    this.formCreate = new FormGroup({
      description: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      schedule: new FormControl('', [Validators.required])
    });
  }

    save(){
      event.preventDefault();
      if (this.formCreate.valid){
        const LoginModel =
      {
        description : this.formCreate.controls['description'].value,
        category : this.formCreate.controls['category'].value,
        schedule : this.formCreate.controls['schedule'].value
      }
      let token = localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      };
      const requestOptions = {
          headers : headers
      }
      this._appService.post(this._microservice.movieApi,LoginModel,requestOptions).subscribe(x => {
        if (x.jwtToken !== undefined){
          this.router.navigate(['movie']);
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
