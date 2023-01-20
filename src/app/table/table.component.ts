import { Component } from '@angular/core';
import {ApiService} from '../services/api.service';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  // apiData:any;
  constructor(private apiService:ApiService,public dataService:DataService){
    apiService.getData().subscribe((data)=>{
      console.log(data);
      this.dataService.sharedTable=data;
    });
  }
}
