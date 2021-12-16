
import { NgModule } from '@angular/core';
import { MovieRoutingModule } from '../movie.module.route';
import { MovieRegisterComponent } from './movie-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    MovieRegisterComponent,
  ],
  imports: [
    BrowserModule,
    MovieRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
    ],
  exports: [MovieRoutingModule],
})
export class MovieRegisterModule { }
