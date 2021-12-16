
import { NgModule } from '@angular/core';
import { MovieRoutingModule } from '../movie.module.route';
import { MovieListComponent } from './movie-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    MovieListComponent,
  ],
  imports: [
    BrowserModule,
    MovieRoutingModule,
    FormsModule,
    CommonModule,

    ],
  exports: [MovieRoutingModule],
})
export class MovieModule { }
