/**
 * Created by Vk on 13/3/2017.
 */
import {Pipe} from '@angular/core';

@Pipe({
  name:'myDouble',
  pure:true
})



export class categroyList{
  transform(value:number){
    return value*2;
  }
}

