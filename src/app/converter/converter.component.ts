import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {ApiServiceService} from '../services/api-service.service';
@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {
  currencies:string[]=['INR','USD','EUR','AUD','CAD'];
  jsonData:any=[];
  c1:any='INR';
  c2:any='INR';
  op='1';
  result=1;
  amount:any=1;
  currencyForm=new FormGroup({
    inputCur:new FormControl(1),
    currency1:new FormControl('',Validators.required),
    currency2:new FormControl('',Validators.required)
  });
  get f(){
    return this.currencyForm.controls;
  }
  constructor(private apiService:ApiServiceService){
    this.currencyForm.controls['currency1'].setValue('INR',{onlySelf:true});
    this.currencyForm.controls['currency2'].setValue('INR',{onlySelf:true});
  }
  convertCurrency(){
    this.amount=this.currencyForm.value.inputCur;
    this.c1=this.currencyForm.value.currency1;
    this.c2=this.currencyForm.value.currency2;
    this.apiService.getData(this.currencyForm.value.currency1).subscribe(data=>{
      this.jsonData=JSON.stringify(data);
      this.jsonData=JSON.parse(this.jsonData);
      switch(this.currencyForm.value.currency2){
        case 'INR':
          this.op=this.jsonData.rates.INR;
          break;
        case 'USD':
          this.op=this.jsonData.rates.USD;
          break;
        case 'EUR':
          this.op=this.jsonData.rates.EUR;
          break;
        case 'AUD':
          this.op=this.jsonData.rates.AUD;
          break;
        case 'CAD':
          this.op=this.jsonData.rates.CAD;
          break;
      }
      this.multiplyAmount(this.currencyForm.value.inputCur,Number(this.op));
    });
  }
  multiplyAmount(input1:any,input2:any){
    this.result=input1*input2;
    this.result=Number(this.result.toFixed(2));
    console.log(this.result);
  }
}
