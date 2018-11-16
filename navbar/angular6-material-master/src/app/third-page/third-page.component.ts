import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit {
  data:any=[];
  constructor(private httpClient:HttpClient) {
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts?userId=1').subscribe((res)=>{
    this.data=res;
  });
  }
  ngOnInit() {
      
  }
  
}
