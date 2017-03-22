/**
 * Created by Vk on 13/3/2017.
 */
import {Component,OnInit} from '@angular/core';
import {apiService} from "../create/httpService/methodOfService";
import {Router} from "@angular/router";

@Component({
  selector:'top-bar',
  templateUrl:'./topbar.component.html'
})

export class TopbarComponent implements OnInit{
 userName="Angular 2";
constructor(private serv:apiService,private router:Router){
 // this.userName=localStorage.getItem('appData').user.name.display;
}
ngOnInit(){
  // this.userName=localStorage.getItem('appData').user.name.display;
}

  logout(){
    localStorage.removeItem('appData');
    this.serv.postMethod('account/logout','{}')
      .subscribe(
        res=>{
          if(res){
            localStorage.clear();
            this.router.navigate(['/login'])
          }
        },
        error=>{console.log(error)}
      )
  }
}
