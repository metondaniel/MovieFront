
import { NgModule } from '@angular/core';
import { MovieRoutingModule } from '../movie/movie.module.route';
import { MovieComponent } from './../movie/movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.module.routes';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule
    ],
  exports: [LoginRoutingModule],
})
export class LoginModule { }
