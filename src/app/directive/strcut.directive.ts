/**
 * Created by Vk on 27/3/2017.
 */

import {Directive, Input, ViewContainerRef, TemplateRef} from "@angular/core";
@Directive({
  selector:'[strctDirective]'
})

export class strDirective {
  @Input('strctDirective') set strctDirective(value:boolean){
    if(value)
    {
      this.vcr.createEmbeddedView(this.temRef)
    }
    else
    {
      this.vcr.clear()
    }
  }
  constructor(private vcr:ViewContainerRef,private temRef:TemplateRef<any>)
  { }
}
