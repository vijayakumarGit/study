
/**
 * Created by Vk on 15/3/2017.
 */

import {Component, AfterViewInit} from "@angular/core";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {apiService} from "../create/httpService/methodOfService";
import {Router} from "@angular/router";
declare const gapi: any;
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

<div class="d-flex justify-content-center">
<button type="submit" class="p-2 btn btn-default">Submit</button>
<!--<div id="googleBtn">Google</div>-->
<button  type="button" id="glogin" class="p-2 btn btn-primary">google login</button>
</div>
</div>
</div>
  </form>`
})

export class LoginComponent implements AfterViewInit{

  myForm1:FormGroup;
  gLogin:any;
  constructor(private FB:FormBuilder,private login:apiService,private router:Router)
  {

     this.myForm1=FB.group(
      {
        'username':['',[Validators.required]],
        'password':['',Validators.compose([Validators.required])],
        'mode':['WEB']
      }
    )
  }

  onSubmit(){
    // console.log(this.myForm1.value)
    let value=this.myForm1.value;
    let url='account/login';

    this.login.postMethodUnAuth(url,value)
      .subscribe(
      res=>{
        console.log(res)
         if(res) {
          localStorage.setItem('appData', JSON.stringify(res))
          this.router.navigate(['/secure', {outlets: {'auth': ['pipe']}}])
        }
      },
      error=>{
        console.log(error)
      }
    )

  }

  public auth2:any
  ngAfterViewInit() {
    gapi.load('auth2',  () => {
      this.auth2 = gapi.auth2.init({
        client_id: '598297323901-lrti0ajlk0bui8onann1msjd1f5v5nni.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('glogin'));
    });
  }
  public attachSignin(element) {
     this.auth2.attachClickHandler(element, {},
      (loggedInUser) => {
        let crObj=loggedInUser;
        crObj.type='Google'
         localStorage.setItem('appData', JSON.stringify(crObj))
        this.router.navigate(['/secure', {outlets: {'auth': ['pipe']}}])
         }, function (error) {
        // alert(JSON.stringify(error, undefined, 2));
      });
  }




}
