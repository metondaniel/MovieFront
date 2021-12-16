import { Component, OnInit } from '@angular/core';
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
  nome;
  constructor(private _appService: AppService, private _microservice: MovieMicroservicesAddress) {
    this.displayedColumns = ['Title','Category', 'Schedule','Description', 'Edit', 'Remove'];
    _appService.get(_microservice.movieApi).subscribe(x => {
      this.movieList = x
    });

  }

  ngOnInit() {
  }
  eventClickEdit(id, nome) {
    this._appService.put(this._microservice.movieApi, {id, nome}).subscribe(x => {

    })
  }
  eventClickDelete(id) {

  }
  eventClickSearch() {

  }
  eventClickNew() {

  }
}
