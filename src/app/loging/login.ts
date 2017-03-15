
/**
 * Created by Vk on 15/3/2017.
 */

import {Component} from "@angular/core";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
@Component({
  selector:'app-login',
  template:`<form  (ngSubmit)="onSubmit()" [formGroup]="myForm1" >
<div class="row">
<div class="col-md-5 well col-center-block mt-xs-15">
  <div class="form-group">
  <label for="username" class="text-info"> Username</label>
  <input type="text" class="form-control" name="username" formControlName="username"/>  
  </div>
  <div class="form-group">
  <label class="text-info">Password</label>
  <input type="password" class="form-control" formControlName="password"/>  
</div>
<div class="col-sm-3 col-center-block">
<button type="submit" class="btn btn-default">Submit</button>
</div>
</div>
</div>
  </form>`
})

export class LoginComponent{
  myForm1:FormGroup;

  constructor(private FB:FormBuilder)
  {
    this.myForm1=FB.group(
      {
        'username':['',Validators.compose([Validators.required])],
        'password':['',Validators.compose([Validators.required])],
        'mode':['WEB']
      }
    )
  }

  onSubmit(){
    console.log(this.myForm1.value)
  }
}
