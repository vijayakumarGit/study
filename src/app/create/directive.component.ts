import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  template: `
<h1 class="text-info">Directive</h1>
  <p class="text-danger">What is directive ?<br>
   Directives is a unique and powerful feature available only in Angular.<br>
   Directives let you invent new HTML syntax, specific to your application.
   This allows directives to register behavior, or transform the DOM<br><br>
   In Angular 2 have 3 type of directive<br> 
</p>
  <ul class="text-primary">
   <li>Components Directive</li>
   <li>Attribute Directive</li>
   <li>Structural Directive</li>
  </ul>
  <h3 class="text-info">To Create directive using @ Directive decorator</h3>
  <p class="text-danger">import directive meta data<br>
  @Directive inside using selector with [] <br> Ex:- selector:[directive_name]</p>
  <h3 class="text-info">Attribute Directive</h3>
  <div changeColor>Custom Directive with default background color res</div>
  <br>
  <div changeColor [defcolor]='"yellow"' [crColor]='"green"'>Custom Directive with Input and output  background color change using native elemant</div>
    <pre>&lt;div changeColor [defcolor]='"yellow"' [crColor]='"green"'&gt;Custom Directive with Input and output  background color change using native elemant&lt;/div&gt;  </pre>
  <div changeColor [scrColor]='"lime"' [sDefColor]='"pink"'>Custom Directive with Input and output  background color change using renderer</div>
  <pre>&lt;div changeColor [scrColor]='"lime"' [sDefColor]='"pink"'&gt;Custom Directive with Input and output  background color change using renderer&lt;/div&gt;</pre>

<pre>
  @Input() defcolor:string;
  @Input() crColor:string;
  @Input() sDefColor:string;
  @Input() scrColor:string;

  @HostListener('mouseenter') mouseover()
    this.changeColors(this.defcolor)
    this.changeRender(this.sDefColor)
  
  @HostListener('mouseleave') mouseleave()
    this.changeColors(this.crColor)
    this.changeRender(this.scrColor)
    
    
    private changeRender(color:string):void
    if(color)
    this.re.setElementStyle(this.ER.nativeElement,'background-color',color)
    
    private changeColors(color:string):void
    if(color)
    this.ER.nativeElement.style.backgroundColor=color  
</pre>
<h3 class="text-info">Structural Directive</h3>
<div class="text-success">Default Structural Directive</div>
<ul *ngFor="let i of item;let ind=index;let odd=odd"><li [ngClass]="{'text-danger':odd}">{{i}}</li></ul>
<div class="text-primary">ngFor</div>
<ul *ngFor="let i of item1;let ind=index;let odd=odd"><li [ngClass]="{'text-danger':odd}">{{i}}  -Index- {{ind}} -checkodd- {{odd}}</li></ul>
<pre>&lt;ul *ngFor="let i of item;let ind=index;let odd=odd"&gt;&lt;li [ngClass]="'text-danger':odd"&gt;i -Index- ind -checkodd- odd&lt;/li&gt;&lt;/ul&gt;</pre>
<div class="text-primary">ngIf</div>
<input type="checkbox" class="radio" [(ngModel)]="checkEvent"/>
<div *ngIf="checkEvent">Checked !</div>
<pre>
&lt;input type="checkbox" class="radio" [(ngModel)]="checkEvent"/&gt;
&lt;div *ngIf="checkEvent"&gt;Checked !&lt;/div&gt;
</pre>
<div class="text-primary">ng Switch</div>
<input type="text" [(ngModel)]="checkValue"  />
<ul [ngSwitch]="checkValue">
<li *ngSwitchCase="'Apple'">Apple</li>
<li *ngSwitchCase="'Grapes'">Grapes</li>
<li *ngSwitchCase="'Mango'">Mango</li>
<li *ngSwitchDefault>No Item Fund</li>
</ul>
<pre>
&lt;input type="text" [(ngModel)]="checkValue"  /&gt;
&lt;ul [ngSwitch]="checkValue"&gt;
&lt;li *ngSwitchCase="'Apple'"&gt;Apple&lt;/li&gt;
&lt;li *ngSwitchCase="'Grapes'"&gt;Grapes&lt;/li&gt;
&lt;li *ngSwitchCase="'Mango'"&gt;Mango&lt;/li&gt;
&lt;li *ngSwitchDefault&gt;No Item Fund&lt;/li&gt;
&lt;/ul&gt;
</pre>
<div class="text-primary">Custom Structural Directive</div>
<input type="checkbox" [(ngModel)]="cond"/>
<div *strctDirective="cond">Custom Structural Directive Checked ! </div>
<pre>
&lt;div class="text-primary"&gt;Custom Structural Directive&lt;/div&gt;
&lt;input type="checkbox" [(ngModel)]="cond"/&gt;
&lt;div *strctDirective="cond"&gt;Custom Structural Directive Checked ! &lt;/div&gt;
</pre>
<pre>
import Directive, Input, ViewContainerRef, TemplateRef from "@angular/core";
@Directive
  selector:'[strctDirective]'


export class strDirective 
  @Input('strctDirective') set strctDirective(value:boolean)
    if(value)
    
      this.vcr.createEmbeddedView(this.temRef)
    
    else
    
      this.vcr.clear()
   
  
  constructor(private vcr:ViewContainerRef,private temRef:TemplateRef&lt;any&gt;)
  

</pre>
`,
  styles: []
})
export class DirectiveComponent implements OnInit {
  checkEvent:boolean=true;
  cond:boolean=true;
  checkValue:string='Apple';
  item:any=["ngFor","ngIf","ngSwitch"]
  item1:any=["hi","hello","welcome"]
  constructor() {
    console.log("ghjkljhvg")
  }

  ngOnInit() {
  }

}
