import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pipe',
  templateUrl: "pipe.component.html",
  styles: []

})

export class PipeComponent implements OnInit {
    myValue:string;
  myDate=new Date();
  myCompany=['Apple','Microsoft','Orange','Philipes','Boss'];
  myCars=[{name:'Audi'},{name:'Benze'},{name:'Fararri'},{name:'Shift'},{name:'Mehindra xuv'}];
  myFood=['Idly','Dosa','Vada','Poori','Meals','Briyani']
  myNonVegFood=['Grill','Thandoori','Chicken briyani','Egg','Meals','Mutton Briyani']
  constructor() {
    // console.log(this.myNonVegFood);
  }
  asyncvalue=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('Data is here'),2000)
  });
  ngOnInit() {
    this.myValue='vijay';
  }

}
