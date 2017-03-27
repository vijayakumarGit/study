/**
 * Created by Vk on 13/3/2017.
 */
import {Component, OnInit, Input} from '@angular/core';
import {apiService} from "../create/httpService/methodOfService";
import {Router} from "@angular/router";
import {LoginComponent} from '../loging/login'

@Component({
  selector:'top-bar',
  templateUrl:'./topbar.component.html'
})

export class TopbarComponent implements OnInit{
  @Input() myName:string="Angular 2";
   @Input()  imgUrl:string="";
constructor(private serv:apiService,private router:Router,private ST:LoginComponent){
 // this.userName=localStorage.getItem('appData').user.name.display;

}
ngOnInit(){
  // this.userName=localStorage.getItem('appData').user.name.display;
}

  logout(){
    this.ST.logOut();
    localStorage.removeItem('appData');
    // this.serv.postMethod('account/logout','{}')
    //   .subscribe(
    //     res=>{
    //       if(res){
    //         localStorage.clear();
    //         this.router.navigate(['/login'])
    //       }
    //     },
    //     error=>{console.log(error)}
    //   )
  }


}
