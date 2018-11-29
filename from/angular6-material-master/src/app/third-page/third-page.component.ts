import { Component, OnInit } from '@angular/core';
import { UserService } from "./third-page.services";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';


@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit {
  data:any=[];
  search:any={};
  registerForm1: FormGroup;
  constructor(private router: Router,public thirdServices:UserService,private formBuilder: FormBuilder) {
    this.registerUser1();
  }
  registerUser1(){
    this.thirdServices.registerUser1(this.data).subscribe(res => {
      this.data=res
    });
  }
  createUser() {
    this.router.navigateByUrl('/first-page'); 
  }
  searchValue(username){
       console.log(username);
    this.thirdServices.searchMethods(username).subscribe((res) => {
      swal("","","success",{title: "success",text: "Your successfully Created.",timer: 1000
        });
        if(username!="")
         this.data=res
         else
         this.registerUser1();

      })
  }
  ngOnInit() {

     
  }
  
}
