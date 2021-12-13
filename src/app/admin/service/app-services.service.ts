import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';
var login;
var httpOptions;
@Injectable()
export class AppService {
  constructor(private _http: Http) {

  }

  get(apiUrl): Observable<any> {
    return this._http.get(apiUrl)
      .map((data: Response) => {
        return data.json();
      });
  }

  getBy(apiUrl, param) {
    return this._http.get(apiUrl + param)
      .map((data: Response) => {
        return data.json();
      });
  }

  post(apiUrl, param)  {

    return this._http.post(apiUrl, param)
      .map((data: Response) => {
        return data.json();
      });
  }

  put(apiUrl, param) {
    return this._http.put(apiUrl, param)
      .map((data: Response) => {
        return data.json();
      });
  }
  delete(apiUrl, param) {
    return this._http.delete(apiUrl + param)
      .map((data: Response) => {
        return data.json();
      });
  }
}
