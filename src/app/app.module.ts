import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovieModule } from './movie/movie.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { LoginModule } from './account/login.module';
import { AppService } from './admin/service/app-services.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'movie', component: MovieListComponent }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MovieModule,
    LoginModule,
    [ RouterModule.forRoot(routes) ],
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }


