/**
 * Created by Vk on 15/3/2017.
 */

import {Component} from '@angular/core';
import {NgForm, FormControl, FormGroup, Validators, FormArray, FormBuilder} from "@angular/forms";
import {Observable} from "rxjs/Rx";



@Component({
  selector:'app-data',
  template:`
  <form [formGroup]="myForm" (ngSubmit)="onSubmit()"><div class="col-sm-4"> 
  <h2 class="text-success">Data driven</h2> 
  <div formGroupName="userData"> 
  <div class="form-group"> 
  <label class="username">Username</label> 
  <input type="text" class="form-control" name="username" formControlName="username"   id="username"> 
  <div *ngIf="!myForm.controls['userData'].controls['username'].valid"> 
  invalid name</div> 
  </div> 
  <div class="form-group"> 
  <label class="email">Email</label> 
  <input type="text" class="form-control" name="email" formControlName="email"> 
  </div> 
  </div> 
  <div class="form-group"> 
  <label class="password">Password</label> 
  <input type="password" class="form-control" name="password" formControlName="password" id="password"> 
  </div>
  
   <div class="radio" *ngFor="let g of Gender">
    <label>
    <input type="radio" class="radio checkbox-primary" formControlName="gender" [value]="g"/>
      {{g}}
    </label>
    </div>
  <div class="form-group" formArrayName="hobbies"> 
  <label class="text-info">Hobbies</label>   
  <div class="form-group" *ngFor="let hobby of this.myForm.controls['hobbies'].controls;let i=index">
   <input type="text" class="form-control" name="hobbies" formControlName="{{i}}"> 
  </div> 
  </div> 
  <button type="button" class="btn btn-warning" (click)="onAddHobby()">Add Hobbies</button>
  <button type="submit" class="btn btn-primary" style="float: right" [disabled]="!myForm.valid">Submit</button> 
  </div> 
  <div class="bg-info text-info col-md-4" style="word-wrap: break-word"> 
  To use Data Driven need to import ReactiveFormModule in app.module 
  new FormControl(Displayvalue,Validators.required) 
  To use formcontrol inside formgroup import FormGroup and FromControl 
  <ul>
  <li>In Data Driven We need to import FromControl in forms then we can use in html formGroup property binding</li>
  <li>formGroupName,formControlName</li>
  <li>while creating new FormGroup inside value new FormControl</li>
  <li>For Example new FormControl('name',Validators.required),</li>
  <li>Using form builder import FromBuilder simple way of creating form</li>
  </ul>
  <a href="https://angular.io/docs/ts/latest/api/forms/index/Validators-class.html">https://angular.io/docs/ts/latest/api/forms/index/Validators-class.html  </a> 
  </div> 
  </form>`,
  })



export class DataDriven{
    myForm:FormGroup;
    Gender=['Male','Female'];
  constructor(private FB:FormBuilder){
    // this.myForm=new FormGroup({
    //   userData:new FormGroup({
    //     'username':new FormControl('Chinnamma',Validators.required),
    //   'email':new FormControl('',Validators.required),
    //     }
    //  ),    'hobbies':new FormArray([
    //       new FormControl('Games',Validators.required)
    //     ]),
    //     'password':new FormControl('',Validators.required),
    //     'gender':new FormControl('Male')
    // }
    // );

    this.myForm=FB.group({
      userData:FB.group({
        'username':['Chinnamma',[Validators.required,this.myCustomValidator]],
        'email':['',Validators.required]
      }),
      'hobbies':FB.array([['Game',Validators.required,this.myAsyncValidator]]),
      'password':['',Validators.required],
      'gender':['Male']
    })
  }

  onAddHobby(){
    (<FormArray>this.myForm.controls['hobbies']).push(new FormControl('',Validators.required,this.myAsyncValidator))
  }

  myCustomValidator(control:FormControl){

    if(control.value==='Google') {
      return {example:true};
    }
    return null;
  }
  onSubmit(){
    console.log(this.myForm)
  }


  myAsyncValidator(control:FormControl): Promise<any> | Observable<any>{
    const promise=new Promise(
      (resolve,reject)=>{
        setTimeout(()=>{
          if(control.value==='VIJAY')
            return resolve({'example':true})
          else
            return resolve(null)
          },2000
        )
      }
    )
    return promise;
  }




}
