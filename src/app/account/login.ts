import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { request } from 'http';
import { Movie } from '../admin/model/movie';
import { AppService } from '../admin/service/app-services.service';
import { AuthMicroservicesAddress } from '../admin/service/auth-microservice';
import { Router, RouterModule, Routes } from '@angular/router';

var formLogin = new FormControl({
  login: new FormControl('', [Validators.required]),
  password: new FormControl('', [Validators.required])
});

@Component({
  selector: 'app-list-movie',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {

  movieList: Movie[];
  displayedColumns: string[];
  dataSource;
  constructor(private _appService: AppService, private _microservice: AuthMicroservicesAddress,
    private router: Router) {

  }

  ngOnInit() {
  }

  save(){
    this._appService.post(this._microservice.authApi,formLogin).subscribe(x => {
        this.router.navigate(['../movie/movie-list']);
    });
  }

}
