import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  template: `
   <div id="page-wrapper" class="contentBody">

  <div class="container-fluid">
    directive works
  </div>


</div>
  `,
  styles: []
})
export class DirectiveComponent implements OnInit {

  constructor() {
    console.log("ghjkljhvg")
  }

  ngOnInit() {
  }

}
