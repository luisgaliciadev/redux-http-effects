import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url = 'https://reqres.in/api';
  
  constructor(
    private _HttpClient: HttpClient
  ) { }

  getUsers() {
    return this._HttpClient.get(`${this.url}/users?per_page=6&delay=5`)
    .pipe(
      map( (response: any) => {
        return response.data;
      })
    );
  }

  getUser(id: string) {
    return this._HttpClient.get(`${this.url}/users/${id}`)
    .pipe(
      map( (response: any) => {
        return response.data;
      })
    );
  }

 
}
