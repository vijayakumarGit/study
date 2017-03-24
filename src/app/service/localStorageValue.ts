
/**
 * Created by Vk on 23/3/2017.
 */
import {FormatinService} from './structService'
import {Injectable} from '@angular/core'

@Injectable()

export class filllocalStrogeValue{
  public resname:string;
  constructor(private SS:FormatinService){
    let profile=JSON.parse(localStorage.getItem('appData'))
    // console.log(JSON.stringify(profile))
    if(profile.type=='Google'){
      this.googleFillData()
    }
    else if(profile.type=='LIAD'){
      this.tofillData()
    }

  }
 public tofillData(){
   let res=JSON.parse(localStorage.getItem('appData'))
    this.resname=this.SS.forName(res.user.name)
  }

  public googleFillData(){
    let res=JSON.parse(localStorage.getItem('appData'))
    localStorage.setItem('auth',res.Zi.access_token);
    this.resname=res.w3.ig
  }



}
