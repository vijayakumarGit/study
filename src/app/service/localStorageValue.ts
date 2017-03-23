
/**
 * Created by Vk on 23/3/2017.
 */
import {FormatinService} from './structService'
import {Injectable} from '@angular/core'

@Injectable()

export class filllocalStrogeValue{
  public resname:string;
  constructor(private SS:FormatinService){
   this.tofillData()
  }
 public tofillData(){
   let res=JSON.parse(localStorage.getItem('appData'))
    this.resname=this.SS.forName(res.user.name)
  }



}
