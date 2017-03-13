import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pipe',
  templateUrl: "pipe.component.html",
  styles: []

})

export class PipeComponent implements OnInit {
    myValue:string;
  myDate=new Date();
  constructor() { }

  ngOnInit() {
    this.myValue='vijay';
  }

}
