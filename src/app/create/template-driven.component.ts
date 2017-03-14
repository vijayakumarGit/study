/**
 * Created by Vk on 14/3/2017.
 */
import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";
@Component({
  selector:'template-driven',
  template:'<h2 class="text-success">Template driven</h2>' +
  '<form (ngSubmit)="onSubmit(f)" #f="ngForm"><div class="col-lg-4">' +
  '<div ngModelGroup="userDate">' +
  '<div class="form-group">' +
  '<label class="username">Username</label>' +
  '<input type="text" class="form-control" name="username" [(ngModel)]="user.username" id="username" required>' +
  '</div>' +
  '<div class="form-group">' +
  '<label class="email">Email</label>' +
  '<input type="text" class="form-control" name="email" [(ngModel)]="user.email" required>' +
  '</div>' +
  '</div>' +
  '<div class="form-group">' +
  '<label class="password">Password</label>' +
  '<input type="password" class="form-control" name="password" [(ngModel)]="user.password" id="password" required>' +
  '</div>' +
  '<div class="radio" *ngFor="let g of userGender">' +
  '<label>' +
  '<input type="radio" name="gender" [(ngModel)]="user.gender" [value]="g"></label>' +
  '{{g}}' +
  '</div>' +
  '<button type="submit" class="btn btn-primary">Submit</button>' +
  '</div></form>',




  styles:[`.ng-invalid{
            border: 1px solid red;
          }`]

})


export class TemplateDriven{
  user={
    username:'vijayakumar',
    password:'123456',
    email:'vijayakumar@hakunamatata.in',
    gender:'Male'
  };
  userGender=['Male','Female'];
  onSubmit(form:NgForm){
    console.log(this.user)
    console.log(form.value)
  }
}
