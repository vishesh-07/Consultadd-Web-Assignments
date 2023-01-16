import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }
  getData(){
    var url='https://jsonplaceholder.typicode.com/posts';
    return this.http.get(url);
  }
}
