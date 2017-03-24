/**
 * Created by Vk on 23/3/2017.
 */
import {Component, Input, AfterViewInit, OnChanges} from "@angular/core";
import {Observable} from "rxjs";
@Component({
  selector:'app-inout-child',
  template:`<h3 class="text-success">Input</h3>
  <p class="list-group-item text-info">
  <span class="text-success">UserName:{{userEnter?.uname | uppercase}}</span><br>
  <span class="text-success">Age:{{userEnter?.age}}</span>
  <span class="text-danger text-right">{{userCurrentValue}}</span>
  </p>
  <h3 class="text-success">Output</h3>
  <table>
  <tr *ngFor="let v of dynamicInput">
  <th class="col-sm-10">{{v.name}}</th>
  <th class="col-sm-10"><input type="number" class="form-group" [(ngModel)]="v.box"></th>
  </tr>
   <tr>
   <th class="col-sm-10"><input type="button" class="btn btn-success" value="Enter" (click)="totValue()"></th>
  </tr>
    
</table>
`

})
export class InandOutChild implements AfterViewInit,OnChanges{
   @Input() userEnter:any;
  dynamicInput:any []=[];
  @Input('userDataValue') userCurrentValue:Observable<number>;
  constructor(){
    this.dymicalLoad(5)
  }
  dymicalLoad(userCurrentValue:number){
    var i=0
    let val=userCurrentValue;
    while (i<val){
    let obj={'name':'Enter Value'+i,'box':''};
      this.dynamicInput.push(obj)
      i++
    }
    console.log(this.dynamicInput)
  }
  totValue(){
    console.log("success")
  }
  ngOnChanges(){
    console.log("lkjhhjkl")
  }
  ngAfterViewInit(){
      // this.userDataValue.subscribe(()=>{
      //   console.log(this.userCurrentValue)
      // })
  }

}
