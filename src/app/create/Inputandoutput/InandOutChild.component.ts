/**
 * Created by Vk on 23/3/2017.
 */
import {Component, Input, AfterViewInit, OnChanges, Output, EventEmitter} from "@angular/core";

import {Observable} from "rxjs";
import {CalCulateService} from "../../service/calCulation.service";


@Component({
  selector:'app-inout-child',
  template:`<h3 class="text-success">Input</h3>
  <p class="list-group-item text-info">
  <span class="text-success">UserName:{{userEnter?.uname | uppercase}}</span><br>
  <span class="text-success">Age:{{userEnter?.age}}</span>
  <span class="text-danger text-right">{{userCurrentValue}}</span>
  </p>
  <pre>
   <mark>@Input() userEnter:any;</mark> 
   &lt;p class="list-group-item text-info"&gt;
  &lt;span class="text-success"&gt;UserName:userEnter?.uname | uppercase&lt;/span&gt;&lt;br&gt;
  &lt;span class="text-success"&gt;Age:userEnter?.age&lt;/span&gt;
  &lt;span class="text-danger text-right"&gt;userCurrentValue&lt;/span&gt;
  &lt;/p&gt;
</pre>
  
  <h3 class="text-success">Output</h3>
  <p class="text-danger">
    @output is a decorator used inside child component that allows event to flow from child component to parent component;
    </p>
  <table>
  <tr *ngFor="let v of dynamicInput">
  <th class="col-sm-10">{{v.name}}</th>
  <th class="col-sm-10"><input type="number" class="form-group" [(ngModel)]="v.box"></th>
  </tr>
   <tr>
   <th class="col-sm-10"><input type="button" class="btn btn-success" value="Enter" (click)="totValue()"></th>
  </tr>    
</table>
<pre>
  &lt;table&gt;
  &lt;tr *ngFor="let v of dynamicInput"&gt;
  &lt;th class="col-sm-10"&gt;v.name&lt;/th&gt;
  &lt;th class="col-sm-10"&gt;&lt;input type="number" class="form-group" [(ngModel)]="v.box"&gt;&lt;/th&gt;
  &lt;/tr&gt;
   &lt;tr&gt;
   &lt;th class="col-sm-10"&gt;&lt;input type="button" class="btn btn-success" value="Enter" (click)="totValue()"&gt;&lt;/th&gt;
  &lt;/tr&gt;    
&lt;/table&gt;

<mark>Script part</mark>
  @Output() clickedValue=new EventEmitter&lt;any&gt;()
  constructor(private CC:CalCulateService)
    this.dymicalLoad(5)
  
  dymicalLoad(userCurrentValue:number)
    var i=0
    let val=userCurrentValue;
    while (i&lt;val)
    let obj='name':'Enter Value'+i,'box':'';
      this.dynamicInput.push(obj)
      i++
    
    
     totValue()
    let totvalue=this.CC.addFun(this.dynamicInput);
    this.clickedValue.emit(totvalue)

</pre>
`

})
export class InandOutChild implements AfterViewInit,OnChanges{
   @Input() userEnter:any;
  dynamicInput:any []=[];
  @Input('userDataValue') userCurrentValue:Observable<number>;
  @Output() clickedValue=new EventEmitter<any>()
  constructor(private CC:CalCulateService){
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
   }
  totValue(){
    let totvalue=this.CC.addFun(this.dynamicInput);
    this.clickedValue.emit(totvalue)
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
