import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthMicroservicesAddress } from 'app/admin/service/auth-microservice';
import { Movie } from '../../admin/model/movie';
import { AppService } from '../../admin/service/app-services.service';
import { MovieMicroservicesAddress } from '../../admin/service/movie-microservice';


@Component({
  selector: 'app-list-movie',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [AppService,MovieMicroservicesAddress]
})
export class MovieListComponent implements OnInit {
  movieList: Movie[];
  displayedColumns: string[];
  token: string;
  showLogin: boolean;
  showCreate: boolean;
  nome;
  constructor(private _appService: AppService, private _microservice: MovieMicroservicesAddress,
    private router: Router) {
    this.displayedColumns = ['Title','Category', 'Schedule','Description', 'Edit', 'Remove'];
    _appService.get(_microservice.movieApi).subscribe(x => {
      this.movieList = x
    });
    this.token = localStorage.getItem('token');
    if (this.token === null){
      this.showLogin = true;
      this.showCreate = false;
    }
    else{
      this.showCreate = true;
      this.showLogin = false;
    }

    window['redirectLogin'] = function redirectLogin(hello: string) {
      router.navigate(['login']);
    }
    window['redirectCreate'] = function redirectCreate(hello: string) {
      router.navigate(['movie-register']);
    }
  }

  ngOnInit() {
    }

}
