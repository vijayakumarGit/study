/**
 * Created by Vk on 13/3/2017.
 */
import {Component, OnInit} from '@angular/core';
import {MenuService} from '../service/menu'
@Component({
  selector:'side-bar',
  templateUrl:'./sidebar.component.html',
  providers:[MenuService]
})
export class SidebarComponent implements OnInit{
      sideBarLst:any []=[];
      constructor(private sl:MenuService){};
      ngOnInit(){
        this.sideBarLst=this.sl.sidebarName();
        console.log("safsdfddb"+this.sideBarLst)
      };

}
