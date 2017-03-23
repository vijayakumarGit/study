
/**
 * Created by Vk on 23/3/2017.
 */
import {Component} from "@angular/core";
import {InandOutChild} from "./Inputandoutput/InandOutChild.component";
@Component({
  selector:'app-inout',
  template:`
<h1 class="text-success">Input and Output</h1>
<h3 class="text-info">Input</h3>
<p class="text-danger">
@input is a decorator used inside child compoent that allows data to flow from parent component to child component;
</p>
<table class="table table-bordered">

<tr class="warning"><th>Enter User Name</th>
<th class="col-sm-6"><input type="text" class="form-control" [(ngModel)]="userValue.uname"/></th>
</tr>
<tr class="warning"><th class="col-sm-6">Enter Age</th>
<th class="col-sm-6"><input type="text" class="form-control" [(ngModel)]="userValue.age"/></th></tr>
<tr class="warning"><th class="col-sm-6"><input type="button" (click)="assginValue(userValue)" value="Enter Here"/></th></tr>
</table>
<table>
<tr class="success">
<th class="col-sm-1">Enter Value</th>
<th class="col-sm-1"><input type="number"  [(ngModel)]="crValue"/></th>
<th class="col-sm-1"><button class="btn btn-primary" (click)="sendvalue(crValue)">Enter</button></th>
</tr>
</table>
<app-inout-child [userEnter]="printValue" [userDataValue]="sendCrNum"></app-inout-child>

`
})
export class InputOutputCOmponent{
  userValue:any={};
  printValue:any;
  crValue:number=1;
  sendCrNum:number;
  constructor(){}
  assginValue(val:any){
    this.printValue=val
  }
  sendvalue(val:number){
    console.log(val)
    this.sendCrNum=val
    }

}
