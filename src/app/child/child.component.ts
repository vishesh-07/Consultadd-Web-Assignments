import { Component } from '@angular/core';
import {ApiServiceService} from '../services/api-service.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  apiData:any;
  constructor(private apiService:ApiServiceService){
    apiService.getData().subscribe((data)=>{
      console.log(data);
      this.apiData=data;
    });
  }
}
