/**
 * Created by Vk on 14/3/2017.
 */
import {Component} from "@angular/core";
@Component({
  selector:'template-driven',
  template:'<h2 class="text-success">Template driven</h2>' +
  '<form><div class="col-lg-4">' +
  '<div class="form-group">' +
  '<label class="username">Username</label>' +
  '<input type="text" class="form-control" id="username">' +
  '</div>' +
  '<div class="form-group">' +
  '<label class="password">Password</label>' +
  '<input type="text" class="form-control" id="password">' +
  '</div>' +
  '<button type="submit" class="btn btn-primary">Submit</button>' +
  '</div></form>'
})

export class TemplateDriven{

}
