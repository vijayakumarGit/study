/**
 * Created by Vk on 15/3/2017.
 */

import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector:'app-data',
  template:'<h2 class="text-success">Data driven</h2>' +
  '<form (ngSubmit)="onSubmit(f)" #f="ngForm"><div class="col-sm-4">' +
  '<div>' +
  '<div class="form-group">' +
  '<label class="username">Username</label>' +
  '<input type="text" class="form-control" name="username"  id="username" required>' +
  '</div>' +
  '<div class="form-group">' +
  '<label class="email">Email</label>' +
  '<input type="text" class="form-control" name="email"  required>' +
  '</div>' +
  '</div>' +
  '<div class="form-group">' +
  '<label class="password">Password</label>' +
  '<input type="password" class="form-control" name="password"  id="password" required>' +
  '</div>' +
  '<div class="form-group">' +
  '<label class="text-primary">Hobbies</label>' +
  '<input type="text" name="hobbies">' +
  '</div>' +
  '<button type="addHobbies" class="btn btn-warning">Add Hobbies</button>'+
  '<button type="submit" class="btn btn-primary" >Submit</button>' +
  '</div></form>',
})
export class DataDriven{
  onSubmit(form:NgForm){
    console.log(form)
  }
}
