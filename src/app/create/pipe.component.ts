import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  template: `
   <div id="page-wrapper" class="contentBody">

  <div class="container-fluid">
    pipe works
  </div>


</div>
  `,
  styles: []
})
export class PipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
