/**
 * Created by Vk on 27/3/2017.
 */

import {Directive, ElementRef, Input, HostListener, HostBinding, Renderer} from "@angular/core";
@Directive({
  selector:'[changeColor]'
})
export class customeDirective{
  @Input() defcolor:string;
  @Input() crColor:string;
  @Input() sDefColor:string;
  @Input() scrColor:string;


  @HostListener('mouseenter') mouseover(){
    this.changeColors(this.defcolor)
    this.changeRender(this.sDefColor)
  }
  @HostListener('mouseleave') mouseleave(){
    this.changeColors(this.crColor)
    this.changeRender(this.scrColor)
  }
  // @HostBinding('style.background') get setColor(){
  //   return this.defcolor
  // }



  constructor(private ER:ElementRef,private re:Renderer){
    ER.nativeElement.style.backgroundColor='red'
  }
  private changeColors(color:string):void{
    if(color)
    this.ER.nativeElement.style.backgroundColor=color
  }
  private changeRender(color:string):void{
    if(color)
    this.re.setElementStyle(this.ER.nativeElement,'background-color',color)
  }
}
