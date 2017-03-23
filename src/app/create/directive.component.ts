import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  template: `
  <div>
    directive works
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
