/**
 * Created by Vk on 22/3/2017.
 */


import {Component} from "@angular/core";
import {filllocalStrogeValue} from '../service/localStorageValue'
@Component({
  selector:'app-auth-page',
  templateUrl:'./authPage.html'
})

export class authPageCompoent{
constructor(private LS:filllocalStrogeValue){
  // console.log(this.LS.imgUrl)
}
  resname:string=this.LS.resname;
  imgUrl:string=this.LS.imgUrl;
}
