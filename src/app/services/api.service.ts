import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getData(){
    var url='https://vishesh-07.github.io/json-api/data.json';
    return this.http.get(url);
  }
}
