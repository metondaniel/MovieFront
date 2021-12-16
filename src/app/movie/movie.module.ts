
import { NgModule } from '@angular/core';
import { MovieRoutingModule } from './movie.module.route';
import { MovieComponent } from './../movie/movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    MovieComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MovieRoutingModule,
    FormsModule
    ],
  exports: [MovieRoutingModule],
})
export class MovieModule { }
