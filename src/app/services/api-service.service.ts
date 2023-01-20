import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  constructor(private http:HttpClient) { }
  getData(country1:any){
    var url="https://api.exchangerate.host/latest?base="+country1;
    return this.http.get(url);
  }
}
